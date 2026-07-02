# Safety & Usage Policy Review — [Feature]

> **Why this template:** At Anthropic, PMs — not a separate compliance team — "set usage policies
> and rate limits" and "coordinate evaluations, red-team feedback, and post-launch learning
> loops." Safety review is a product artifact written by the PM, and these docs "often replace
> meetings": written well enough that reviewers can approve async.

**Owner:** · **Reviewers:** Safety/Policy, Eng lead · **Status:**

---

## 1. Intended use

What the feature is for, who may use it, and the user promise ("this feature will/won't …").

## 2. Misuse & harm scenarios

Enumerate concretely. For each: who is harmed, how likely, and how we'd detect it.

| Scenario | Harmed party | Likelihood | Detection signal | Mitigation |
|----------|-------------|------------|------------------|------------|
| e.g. Users extract other tenants' data via prompt injection | | | | |
| e.g. Automated abuse at scale (spam/scraping via our feature) | | | | |
| e.g. Model output causes real-world harm if followed blindly | | | | |
| e.g. Brand damage from offensive/false output screenshot | | | | |

## 3. Usage policy

- Prohibited uses (specific to this feature, beyond the platform-wide policy):
- Enforcement: warn → throttle → suspend? Automated or human?
- Appeals path:

## 4. Rate limits & abuse controls

| Control | Value | Rationale |
|---------|-------|-----------|
| Per-user rate limit | | |
| Anomaly detection threshold | | |
| Max spend / tokens per account per day | | |

## 5. Data handling

- What user data reaches the model? Retention? Used for training? (exact answer, not "TBD")
- PII in prompts/outputs: filtered, logged, or passed through?
- What we tell users about the above, verbatim, in the disclosure copy.

## 6. Behavioral safety requirements

Link the hard rules in the [Model Behavior Spec](./02-model-behavior-spec.md) §2 and the safety
slice of the [Eval Plan](./03-eval-plan.md). Every scenario in §2 above must have an eval or a
monitoring signal — list any that don't and why.

## 7. Incident response

- Severity ladder (S0 = actively harming users → S3 = cosmetic) with response time per level.
- Kill switch: what turns off, who can trigger it, how fast.
- Postmortem required for S0/S1 → use the [Post-Launch Review](./08-post-launch-review.md).

## 8. Residual risk statement

One honest paragraph: what could still go wrong after all mitigations, and why that's acceptable
for this launch stage.
