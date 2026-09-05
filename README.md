# Sulcus

### Control infrastructure for autonomous AI systems.

AI agents are moving from simple assistants toward systems that can **reason, use tools, execute workflows, communicate with other agents, and operate autonomously**.

As autonomy increases, a new infrastructure problem emerges:

**How do we observe, coordinate, govern, and control systems that are making decisions and taking actions on their own?**

**Sulcus is building the control and supervision layer for autonomous AI.**

---

## The Problem

Traditional software infrastructure assumes that execution is relatively deterministic:

```text
Application → Function → Result
```

Agentic systems are fundamentally different:

```text
Agent
  ↓
Decision
  ↓
Tool Call
  ↓
State Change
  ↓
Another Agent
  ↓
Parallel Execution
  ↓
New Decision
  ↓
External Action
```

When multiple autonomous processes operate simultaneously, traditional application-level observability is no longer enough.

Production agent systems need to answer:

* What is every agent doing?
* Why did it make a particular decision?
* What tools and resources can it access?
* What happens when multiple agents act simultaneously?
* How can execution be paused or interrupted?
* How can failures be reconstructed and replayed?
* How can organizations enforce policies around autonomous behavior?

Sulcus is designed around these problems.

---

## Where Sulcus Fits

Sulcus is **not another agent framework**.

Frameworks such as LangGraph help developers construct agent workflows.

Sulcus operates at a different level:

```text
┌──────────────────────────────────────┐
│           AI APPLICATION             │
├──────────────────────────────────────┤
│        AGENT FRAMEWORK / RUNTIME     │
├──────────────────────────────────────┤
│                                      │
│               SULCUS                 │
│       CONTROL & SUPERVISION          │
│                                      │
├──────────────────────────────────────┤
│     MODELS · TOOLS · DATA · APIs     │
├──────────────────────────────────────┤
│          COMPUTE / CLOUD             │
└──────────────────────────────────────┘
```

The long-term vision is for Sulcus to provide infrastructure that can sit underneath different agent architectures and frameworks.

---

## Core Concepts

### Execution

Represent and understand autonomous execution as a first-class system.

### Supervision

Observe agent behavior and maintain system-level awareness of execution.

### Control

Introduce mechanisms for controlling what autonomous systems are allowed to do.

### Coordination

Handle interactions and dependencies between concurrently executing agents.

### Policy

Define constraints and rules around autonomous actions.

### Intervention

Enable systems and operators to pause, inspect, redirect, or terminate execution.

### Replay

Reconstruct execution histories to understand how an autonomous system reached a particular state.

---

## The Parallel Execution Problem

One of the fundamental challenges in multi-agent systems is concurrency.

Consider:

```text
                 ┌── Agent A ──→ Tool 1
                 │
Task ────────────┼── Agent B ──→ Tool 2
                 │
                 ├── Agent C ──→ Database
                 │
                 └── Agent D ──→ Agent A
```

These processes may execute concurrently and interact with shared state.

This introduces problems such as:

* Race conditions
* Conflicting actions
* State inconsistency
* Duplicate execution
* Cascading failures
* Difficult-to-reproduce behavior

Sulcus treats autonomous execution as a **systems problem**, not simply an application-level AI problem.

---

## Current Development

Sulcus is currently in active development.

The initial work focuses on building the underlying architecture and adapters required to integrate Sulcus with existing agent execution environments.

The first adapter implementation explores how Sulcus can interface with **LangGraph-based agent systems** without requiring developers to completely rebuild their existing architecture.

The goal is not to replace agent frameworks.

The goal is to build the infrastructure around them.

---

## Architecture

At a high level:

```text
                 ┌──────────────────┐
                 │   Application    │
                 └────────┬─────────┘
                          │
                 ┌────────▼─────────┐
                 │ Agent Framework  │
                 └────────┬─────────┘
                          │
                 ┌────────▼─────────┐
                 │     Sulcus       │
                 │                  │
                 │  Supervision     │
                 │  Control         │
                 │  Coordination    │
                 │  Policy          │
                 │  State           │
                 │  Events          │
                 └────────┬─────────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
      ┌───▼───┐       ┌───▼───┐        ┌──▼────┐
      │ Tools │       │ Data  │        │  APIs │
      └───────┘       └───────┘        └───────┘
```

The architecture will evolve as the runtime and adapter layers mature.

---

## Why Sulcus?

The AI stack has rapidly developed infrastructure for:

* Foundation models
* Model serving
* Agent frameworks
* Vector databases
* Workflow orchestration
* Observability
* Security

As agents become increasingly autonomous, another layer becomes necessary:

> **Infrastructure for controlling autonomous execution.**

Sulcus is being built to occupy that layer.

---

## Vision

Software is moving from systems that **respond** to systems that **act**.

The next generation of applications will contain increasingly autonomous processes operating across tools, data, APIs, and other agents.

We believe autonomous systems will require infrastructure that makes their execution:

**Observable.
Controllable.
Coordinated.
Governable.**

Sulcus is building toward that future.

---

## Status

🚧 **Early-stage / Active Development**

This repository contains experimental and evolving components of the Sulcus architecture.

APIs, interfaces, and architectural decisions are subject to change.

---

## Contributing

Sulcus is currently being developed as an early-stage infrastructure project.

More documentation, examples, and contribution guidelines will be added as the architecture stabilizes.

---

## License

License information will be added as the project moves toward its public release.

---

**Sulcus**

*Control infrastructure for autonomous AI systems.*

