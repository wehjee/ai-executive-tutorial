# Eval Plan — [Feature name]

> **Why this template:** OpenAI CPO Kevin Weil: "Writing effective evals is becoming a core skill
> for product managers." Anthropic PMs literally "write the evaluations that determine whether a
> feature is safe to ship." The quality of your evals caps the quality of your product — a model
> can only be optimized for what you can measure.

**Owner:** · **Linked docs:** [AI PRD](./01-ai-prd.md) · [Model Behavior Spec](./02-model-behavior-spec.md)
**Where it runs:** [eval harness / CI job / dashboard link]

---

## 1. What we're measuring (and why it matters to the user)

One sentence per dimension, tied to the PRD's success metrics. Typical dimensions: task success,
factual accuracy, instruction-following, safety/refusal correctness, format compliance, tone.

## 2. Golden dataset

Target: **~100+ diverse traces** representing real production scenarios, not just happy paths.

| Slice | Count | Source | Notes |
|-------|-------|--------|-------|
| Happy path | | real user queries / synthetic | |
| Edge cases | | past failures, support tickets | |
| Adversarial | | red-team outputs | |
| Out-of-scope | | | should trigger refusal/handoff |

Rules:
- Every example has an ideal answer or a pass/fail rubric — sourced from the Behavior Spec's worked examples.
- Dataset is versioned. Production failures get added weekly (see [Post-Launch Loop](./08-post-launch-review.md)).
- Keep a held-out slice that prompt-tuning never sees.

## 3. Failure-mode taxonomy

Discovered by reading traces (error analysis), not invented in advance. Each mode is **binary and
specific** — "hallucinated a price," not "bad answer."

| Failure mode | Definition (binary) | Severity | Current rate |
|--------------|--------------------|----------|--------------|
| e.g. Fabricated citation | Cites a source that doesn't exist | Severe | |
| e.g. Format violation | Output not valid per schema | Moderate | |
| e.g. Over-refusal | Declines an in-scope request | Moderate | |

## 4. Graders

**Code-based checks** (deterministic, run on every change): schema validation, regex/keyword
checks, execution tests, latency/cost assertions.

**LLM-as-judge** (for subjective dimensions). Each judge prompt must include:
- Binary pass/fail criteria (no 1–10 scales — they don't reproduce)
- 3–5 example passes and 3–5 example fails
- Structured JSON output with an explanation field
- Judge validated against **human labels** on ≥50 examples before you trust it (report agreement %)

**Human review**: sampling rate, who reviews, and the rubric they use.

## 5. Ship thresholds

The numbers that gate the [Launch Readiness Review](./05-launch-readiness-review.md).

| Metric | Ship bar | Current | Regression rule |
|--------|----------|---------|-----------------|
| Golden-set pass rate | ≥ __% | | no release may drop this by >__pts |
| Severe failure rate | ≤ __% | | zero tolerance / block release |
| Over-refusal rate | ≤ __% | | |
| p95 latency / cost per request | | | |

## 6. Cadence

- **Every prompt or model change:** full golden-set run, results posted to [channel/dashboard].
- **Weekly:** review new production traces, update taxonomy and dataset.
- **Per model upgrade:** full run + side-by-side comparison before switching (version comparison
  is the point — prove the new setup beats the old one).
