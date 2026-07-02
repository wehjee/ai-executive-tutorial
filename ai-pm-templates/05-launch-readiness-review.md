# Launch Readiness Review — [Feature / model release]

> **Why this template:** Anthropic PMs "own model launch planning and execution, define readiness
> criteria, and coordinate across research and product engineering." OpenAI ships via *iterative
> deployment* — release early to progressively wider audiences and refine in public, rather than
> perfecting internally. This doc is the go/no-go gate: nothing ships on vibes.

**Owner:** · **Target date:** · **Decision:** GO / NO-GO / GO WITH CONDITIONS
**Sign-offs:** Product ☐ Eng ☐ Safety/Policy ☐ Legal (if user-facing claims/data changes) ☐

---

## 1. Eval scorecard (from the [Eval Plan](./03-eval-plan.md))

| Metric | Ship bar | Actual | Pass? |
|--------|----------|--------|-------|
| Golden-set pass rate | | | ☐ |
| Severe failure rate | | | ☐ |
| Over-refusal rate | | | ☐ |
| p95 latency | | | ☐ |
| Cost per request | | | ☐ |

Side-by-side vs. current production behavior attached: [link]

## 2. Red-team & dogfood results

- Internal dogfood: __ users, __ sessions, top 3 issues found and their status.
- Red-team: who attacked it, what broke, what was fixed, what was accepted as residual risk.
- Every severe issue found is either fixed or explicitly accepted below — no silent carryover.

## 3. Safety & policy

- [Safety & Usage Policy Review](./06-safety-usage-policy-review.md) signed off: ☐
- Usage policy, rate limits, and abuse monitoring live in production: ☐
- User-facing disclosure (what the AI does, limitations, data use) reviewed: ☐

## 4. Iterative deployment plan

| Stage | Audience | Entry bar | Exit bar (to advance) | Kill criteria |
|-------|----------|-----------|----------------------|---------------|
| 0 | Internal dogfood | this review = GO | | |
| 1 | Trusted testers / __% | | | |
| 2 | __% rollout | | | |
| 3 | GA | | | |

## 5. Rollback & incident plan

- Rollback mechanism and time-to-rollback: (feature flag? model pin? prompt revert?)
- On-call owner for launch week:
- Severity definitions and who can pull the kill switch without a meeting:
- Comms plan if the model does something publicly embarrassing:

## 6. Monitoring from day one

Dashboards live before launch: quality sampling, thumbs up/down, refusal rate, latency, cost,
anomalous-usage alerts. Link: [dashboard]

## 7. Accepted risks

| Risk | Likelihood | Impact | Why we're shipping anyway | Owner |
|------|-----------|--------|---------------------------|-------|
| | | | | |

## 8. Decision log

Date, decision, conditions, and who made the call.
