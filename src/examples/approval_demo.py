"""Offline Sulcus approval demo. Requires the audited Sulcus 1.0.0rc1 source.

Run: python approval_demo.py
No API key, native extension, network call, or external write is used.
"""
from sulcus import (
    AgentToolLoop, ToolApprovalDecision, ToolPermissionPolicy,
    ToolRegistry, ToolResourceLimits, ToolRuntime,
)
from sulcus.llm import LLMResponse, LLMRuntime, LLMToolCall
from sulcus.observability import RuntimeEventLog


class DemoProvider:
    name = "offline"
    default_model = "scripted"

    def __init__(self):
        self.calls = 0

    def complete(self, request):
        self.calls += 1
        if self.calls == 1:
            return LLMResponse(
                content="", provider=self.name, model=self.default_model,
                tool_calls=(LLMToolCall("publish-1", "publish_report", {}),),
            )
        return LLMResponse(content="Done.", provider=self.name, model=self.default_model)


executions = []


def publish_report():
    executions.append("published")
    return "Simulated publication"  # No external side effect.


tools = ToolRegistry()
tools.register(
    name="publish_report", description="Simulate publishing a report.",
    parameters_schema={"type": "object", "properties": {}, "additionalProperties": False},
    func=publish_report,
)
provider = DemoProvider()
events = RuntimeEventLog()
loop = AgentToolLoop(
    llm_runtime=LLMRuntime(provider=provider, event_sink=events),
    tool_runtime=ToolRuntime(registry=tools, event_sink=events),
    event_sink=events,
)

# website-snippet-start
paused = loop.run(
    [{"role": "user", "content": "Publish the report."}],
    tool_permission_policy=ToolPermissionPolicy(
        default_allow=False,
        allowed_tools={"publish_report"},
    ),
    tool_resource_limits=ToolResourceLimits(
        max_tool_calls_per_loop=1,
    ),
    require_tool_approval=True,
)
assert paused.reason == "approval_required"
assert executions == []  # The callable has not run.

# Your application supplies the decision.
result = loop.resume(
    checkpoint=paused.checkpoint,
    approval_decisions=[
        ToolApprovalDecision("publish-1", approved=True),
    ],
)
# website-snippet-end
assert result.completed
assert executions == ["published"]
assert provider.calls == 2  # Original request + final response; no repeated request.
print("Before approval: 0 tool executions")
print("After approval:  1 simulated publication")
print("Final result:    completed")
