# Capability Exposure Decision — [Capability]

> **Why this template:** A core Anthropic PM responsibility is "deciding which model capabilities
> to expose in their product and when." Frontier models can do far more than any product should
> expose on day one; this one-pager records the decision so it can be revisited deliberately
> instead of re-litigated.

**Owner:** · **Decision date:** · **Review date:** (capabilities decisions expire — set one)
**Status:** Expose / Expose gated / Hold

---

## 1. The capability

What the model can do, demonstrated concretely (link to examples/traces, current eval score).

## 2. User value

Who asks for this, how often, and what it's worth to them. What are they doing today instead?

## 3. Readiness assessment

| Dimension | Assessment | Evidence |
|-----------|------------|----------|
| Reliability (eval pass rate on this capability) | | |
| Worst plausible failure & its blast radius | | |
| Misuse potential | | |
| Cost/latency at expected volume | | |
| Support/ops burden if it misbehaves | | |

## 4. Exposure options

| Option | Description | Pick? |
|--------|-------------|-------|
| Full exposure | Available to all users, on by default | |
| Gated | Behind a flag / trusted testers / enterprise only / rate-limited | |
| Assisted | Exposed with human-in-the-loop confirmation on every action | |
| Hold | Keep internal; recheck at next model release | |

## 5. Decision & reasoning

State the decision in one sentence, then the reasoning. Include the dissent if there was one —
future-you wants to know what almost changed the call.

## 6. Triggers to revisit

- Next model release improves [metric] past __
- Eval pass rate reaches __%
- Competitor ships equivalent / user demand exceeds __ requests per week
- Any severe incident → automatic downgrade to Gated/Hold per the
  [Safety & Usage Policy Review](./06-safety-usage-policy-review.md)
