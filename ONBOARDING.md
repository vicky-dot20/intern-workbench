# Intern Onboarding

Your goal today is one small, complete pull request—not reading the entire repository.

## 1. Get access and clone

Accept the repository invitation, install Git and the company-supported Node.js version, then run:

```bash
git clone <repository-url>
cd intern-workbench
npm install
npm run validate
```

If validation fails, copy the exact command and first useful error into your question. Never post tokens or credentials.

## 2. Identify your task

Open the Issue assigned by your mentor. Confirm its title begins with a curriculum ID, for example `[ORI-001]`. Open that task in [CURRICULUM.md](CURRICULUM.md), verify prerequisites, and read only the linked workflow guidance you need.

## 3. Create your branch

```bash
git switch main
git pull --ff-only
git switch -c task/ori-001-software-development
```

Use the exact branch name in the task when one is supplied.

## 4. Work and validate

Stay inside the task's named files/folders. Make a small change, inspect `git diff`, run the task-specific check, then run `npm run validate`.

## 5. Commit and open the PR

```bash
git add <task-files>
git commit -m "docs: complete ori-001 software development"
git push -u origin HEAD
```

Open a PR, use the template, write `Closes #<issue-number>`, disclose AI use, and request your mentor's review. See [DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md) for review changes and completion.

## When to ask for help

First write: what you expected, what happened, exact reproduction steps, what you tried, and the smallest relevant error. Ask early for access, security, destructive-command, or requirement ambiguity problems.

