# AI PRD — [Feature name]

> **Why this template:** Anthropic PMs "write crisp PRDs … and specs that account for
> non-deterministic behavior." A normal PRD assumes the feature does the same thing every time;
> an AI PRD must instead specify a *distribution* of acceptable behavior, an error budget, and
> what happens when the model is wrong.

**Owner:** · **Status:** Draft / In review / Approved · **Last updated:**
**Linked docs:** [Model Behavior Spec](./02-model-behavior-spec.md) · [Eval Plan](./03-eval-plan.md)

---

## 1. Problem

- Who is the user and what job are they hiring this feature for?
- Why does this need a model at all? (If deterministic code solves it, use deterministic code.)
- Evidence: user quotes, support tickets, usage data.

## 2. Proposed solution (one paragraph)

Describe the feature as the user experiences it, not as an architecture.

## 3. Intended behavior

| Scenario | Input example | Ideal output | Acceptable output | Unacceptable output |
|----------|--------------|--------------|-------------------|---------------------|
| Happy path | | | | |
| Ambiguous input | | | | |
| Adversarial / abusive input | | | | |
| Out-of-scope request | | | | |

Full behavioral rules live in the [Model Behavior Spec](./02-model-behavior-spec.md); this table
is the summary the eng team designs against.

## 4. Error budget & failure handling

AI features fail. Specify how much, and what the product does when it happens.

- **Target quality:** e.g. "≥ 95% pass rate on the golden set; ≤ 1% severe failures."
- **Failure UX:** what the user sees on low confidence — hedge, cite sources, refuse, or hand off to a human?
- **Reversibility:** can the user undo/override every model action? If not, why is that acceptable?

## 5. Latency & cost budget

| Metric | Target | Ceiling |
|--------|--------|---------|
| p50 / p95 latency | | |
| Cost per request (tokens) | | |
| Expected requests/day at launch, at 6 months | | |

Note the model tier / routing plan (e.g. small model first, escalate on complexity).

## 6. What we're NOT building

Explicit non-goals, including capabilities the model *could* do but we are choosing not to expose
(record the reasoning in a [Capability Exposure Decision](./04-capability-exposure-decision.md)).

## 7. The next-model bet

Frontier-lab practice: build products that don't fully work yet, so you're ready when the next
model closes the gap.

- Which parts of this feature are at the edge of current model capability?
- If the next model generation is 2× better at [X], what does this feature become?
- What are we building now that's deliberately ahead of the model?

## 8. Success metrics

- Primary metric (one number that says the feature works):
- Guardrail metrics (quality, safety, cost — the things we won't trade away):
- Eval thresholds that gate launch → see [Eval Plan](./03-eval-plan.md) and
  [Launch Readiness Review](./05-launch-readiness-review.md).

## 9. Rollout

Iterative deployment stages (internal dogfood → trusted testers → % rollout → GA), with the
eval/metric bar for advancing each stage.

## 10. Open questions

| Question | Owner | Needed by |
|----------|-------|-----------|
| | | |
