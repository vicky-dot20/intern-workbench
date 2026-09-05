# Product Research and Architecture Decisions

Research date: 2026-09-05.

## Problem

Small engineering teams need a repeatable internship operating system, but the valuable mentor work is contextual review—not repeating branch commands or inventing daily exercises. The product must make a first contribution approachable while gradually removing scaffolding.

## Evidence from current GitHub practice

- GitHub Skills teaches through copies of real repositories and uses Issues, Actions, and normal GitHub workflows. This validates repository-native learning rather than a parallel LMS: https://github.com/skills
- GitHub's exercise template foregrounds audience, learning outcomes, prerequisites, duration, and a fast start. These fields informed the task contract and onboarding path: https://github.com/skills/exercise-template
- Issue forms provide structured, repository-local intake in `.github/ISSUE_TEMPLATE`: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository
- Reusable workflows reduce duplicated deterministic automation, but repository settings control availability. V1 keeps its validation local and dependency-light: https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations
- GitHub Classroom autograding demonstrates the right boundary—commands and tests can validate submissions—but GitHub reports that new Classroom sign-ups are no longer available as of May 2026. Intern Workbench therefore has no Classroom dependency: https://docs.github.com/en/education/manage-coursework-with-github-classroom

## Decisions

1. Ordinary GitHub repositories are the only required platform; no hosted application or database.
2. Stable curriculum IDs are separate from Issue/PR numbers.
3. 206 consolidated V1 tasks balance breadth with maintenance cost; schedules select routes rather than force a linear completion count.
4. Markdown tasks use machine-checked front matter plus human-readable specifications.
5. CI checks objective properties only. Mentors judge architecture, quality, communication, and understanding.
6. AI is handled through disclosure, verification, explanation, and review—not detection.
7. Company-specific material is isolated so upstream framework updates remain feasible.

## Success measures

- A fresh intern can open a first PR in one working session without verbal procedural coaching.
- A mentor can assign, review, request changes, approve, and evaluate using repository artifacts.
- A company can fork and customize without changing the framework core or exposing private information.

