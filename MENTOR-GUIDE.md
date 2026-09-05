# Mentor Guide

## Before the internship

1. Fork the repository and follow [CUSTOMIZATION.md](CUSTOMIZATION.md).
2. Choose a route in [CURRICULUM.md](CURRICULUM.md) based on a baseline exercise; do not assign every task by default.
3. Replace example CODEOWNERS, enable Issues and Actions, configure branch protection, and require validation plus review.
4. Add company-specific material only under `company/`; never commit credentials or private production information.
5. Invite the intern and create the first Issue from the learning-task form.

## Assignment loop

Assign Issue → intern branches → PR → CI → mentor review → changes → re-review → merge → evaluate → next task.

## Spend mentor time on

Reasoning, correctness, tradeoffs, maintainability, risk, user impact, test quality, communication, and whether the intern understands AI-assisted work. Objective CI should cover structure, lint, types, tests, and builds where configured.

## Intervention

- Intervene immediately for security, privacy, access, destructive operations, or harmful production behavior.
- Coach after the intern can show a reproducible blocker and attempted hypotheses.
- Reduce guidance only when evidence is consistently strong; increase it temporarily when foundations are missing.

Use [docs/mentor/EVALUATION-RUBRIC.md](docs/mentor/EVALUATION-RUBRIC.md) after meaningful milestones. Do not equate task count, lines changed, speed, or AI avoidance with engineering ability.

