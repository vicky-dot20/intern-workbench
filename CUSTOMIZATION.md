# Company Customization

## Company should customize

- `company/PROFILE.yml`: stack, supported versions, contacts, review expectations, and approved AI tools.
- `company/STANDARDS.md`: coding, design-system, architecture, security, and communication rules.
- Curriculum route and schedules; company-specific tasks may use a documented company prefix.
- Final-project domain and product constraints.
- `.github/CODEOWNERS`, labels, milestones, branch protection, permissions, and required checks.

## Framework should not be modified casually

Keep core task IDs, metadata schema, task template, validation rules, shared workflow, and AI-accountability fields stable. Upstream updates rely on these contracts.

## Optional configuration

Companies may add private documentation links, additional workflows, or technology tracks. Keep sensitive content in an appropriate private repository; this framework must remain safe to publish.

Run `npm run validate` after every customization. See `company/README.md` for the boundary between generic framework and company content.

