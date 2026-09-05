# Sulcus website

Developer website for Sulcus. Built with React, TanStack Start, Vite, and Tailwind CSS.

## Local development

- `npm install --no-package-lock` (the existing project lockfile is `bun.lock`)
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npx tsc --noEmit`

There is no configured JavaScript test suite. `src/examples/approval_demo.py` is an executable offline example with assertions and is emitted as a downloadable site asset. With the audited Sulcus runtime installed, run `python src/examples/approval_demo.py`.

## Content boundary

Claims were audited against Sulcus development commit `1070b5efd9b9880cac1b011ef34dfcfece8adf79` (1.0.0rc1). Source links are pinned to that revision; review them when updating claims.

Sulcus tool-name policies, call limits, and approval gates apply to calls routed through AgentToolLoop. The initial LangGraph adapter observes callback-exposed execution and wraps native state/interrupt/resume operations; it does not automatically apply those controls.

The interactive execution visual is an illustrative trace, not live telemetry. The displayed Python excerpt is extracted from the downloadable example to prevent copy drift. It uses a scripted provider and an in-memory simulated publication, not a real external write.

Keep the dark surfaces, orange signal color, grid, monospace labels, and thin borders. Do not add unsupported production, distributed-runtime, or automatic framework enforcement claims.
