# Task Authoring Guide

1. Choose the existing phase or propose a documented new phase. Allocate the next unused three-digit number; never reuse or renumber an ID, including deprecated tasks.
2. Copy [templates/task/TASK-TEMPLATE.md](templates/task/TASK-TEMPLATE.md) and complete every section.
3. Use one of LEARN, BUILD, DEBUG, REFACTOR, REVIEW, INVESTIGATE, DOCUMENT, DESIGN, or PROJECT.
4. Use GUIDED, PARTIALLY-GUIDED, INDEPENDENT, or AMBIGUOUS and make the amount of procedural help match it.
5. Reference only existing stable task IDs as prerequisites. Prefer a dependency graph over a single chain.
6. State exact files, observable acceptance criteria, reproducible run/test commands, required evidence, AI disclosure, and a mentor checklist.
7. Use `task/<github-username>/<task-id>-<slug>` for task branches so parallel intern work stays identifiable and collision-free.
8. Keep shared explanations in `docs/`; tasks should be executable specifications, not textbooks.
9. Add the task to the catalogue and run validation.

Deprecate with `status: deprecated`; keep the file and ID reserved. Estimates describe focused work, not deadlines. Review task usefulness and maintenance cost before adding it.

