# Post-Launch Review & Learning Loop — [Feature], [period or incident]

> **Why this template:** Anthropic PMs "coordinate evaluations, red-team feedback, and
> post-launch learning loops so improvements compound over time," and write post-mortems that
> replace meetings. Perplexity keeps postmortems in Notion as source-of-truth history and
> quantifies qualitative feedback into themes. The output of this doc is not a summary — it's
> new eval cases and a ranked fix list.

**Owner:** · **Type:** Scheduled review / Incident postmortem · **Date:**

---

## 1. Scorecard vs. what we shipped against

| Metric | Ship bar (from [Launch Readiness](./05-launch-readiness-review.md)) | Actual in prod | Δ |
|--------|------------------------------------------------------------------|----------------|---|
| Primary success metric | | | |
| Golden-set pass rate | | | |
| Severe failure rate | | | |
| Refusal rate | | | |
| p95 latency / cost per request | | | |

## 2. Feedback, quantified

Don't summarize vibes — count themes. (Perplexity uses tooling to consolidate and quantify
qualitative feedback; a spreadsheet works too.)

| Theme | Count | % of feedback | Trend | Example quote |
|-------|-------|---------------|-------|---------------|
| | | | ↑/↓ | |

Sources: thumbs up/down + comments, support tickets, sales/CS escalations, social mentions.

## 3. Trace review

Read real traces (minimum __ per week, including a random sample, not just flagged ones).

- New failure modes discovered → **added to the taxonomy in the [Eval Plan](./03-eval-plan.md) §3**: …
- Traces added to the golden dataset this period: __ (link)
- Eval blind spots exposed (things users hit that no eval measured): …

## 4. For incidents only: timeline & five whys

- Timeline (detection → mitigation → resolution), time-to-detect and time-to-mitigate.
- Root cause — keep asking why past "the model got it wrong": why didn't an eval catch it? why
  didn't monitoring flag it? why did rollback take __ minutes?
- Blameless: name process gaps, not people.

## 5. Actions (ranked, owned, dated)

| # | Action | Type (eval / prompt / product / policy / monitoring) | Owner | Due |
|---|--------|------------------------------------------------------|-------|-----|
| 1 | | | | |

Rule of thumb: if a review produces zero new eval cases, the review didn't look hard enough.

## 6. Compounding check

What did the *last* review's actions change in this period's numbers? (This line is what makes
it a loop instead of a ritual.)
