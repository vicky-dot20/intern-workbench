# Intern Workbench

Intern Workbench is an open-source, GitHub-native framework for running a structured web-development internship. A company forks the repository, selects and customizes a curriculum, assigns tasks as GitHub Issues, and reviews the intern's work through pull requests. There is no dashboard, hosted backend, learner database, or AI detector: GitHub is the platform.

> This is a structured internship framework, not a replacement for real engineering experience.

## Why it exists

It removes repetitive procedural mentoring—where to work, how to branch, how to test, what a PR needs—so mentors can focus on reasoning, tradeoffs, code quality, and growth. The curriculum contains **206 consolidated core tasks** from absolute beginner through junior-developer-ready practice.

## Workflow

```text
FORK → CUSTOMIZE → INVITE INTERN → ASSIGN ISSUE → IMPLEMENT → TEST
  → PR → CI → REVIEW → FIX → APPROVE → MERGE → NEXT TASK
```

## Start here

- Companies and mentors: [MENTOR-GUIDE.md](MENTOR-GUIDE.md), then [CUSTOMIZATION.md](CUSTOMIZATION.md).
- Interns: [ONBOARDING.md](ONBOARDING.md). The first successful PR is designed to fit in the first working session.
- Curriculum planners: [CURRICULUM.md](CURRICULUM.md) and [schedules/README.md](schedules/README.md).
- Contributors: [CONTRIBUTING.md](CONTRIBUTING.md) and [TASK-AUTHORING-GUIDE.md](TASK-AUTHORING-GUIDE.md).

## How the curriculum works

Permanent phase IDs such as `JS-006` are independent from GitHub Issue and PR numbers. Guidance decreases from `GUIDED` to `AMBIGUOUS`; tasks move from explicit implementation to investigation and product delivery. Shared workflow documentation avoids repeating a textbook inside every task.

## Responsible AI

AI assistance is allowed and must be disclosed. Evaluation is based on verification and demonstrated understanding—not unreliable authorship detection. See [AI-USAGE.md](AI-USAGE.md).

## Validation

```bash
npm run validate
```

The validator checks metadata, IDs, prerequisites, links, required task sections, policy placeholders, and repository structure. CI runs the same objective checks; mentors retain responsibility for subjective judgment.

## License

[MIT](LICENSE)

