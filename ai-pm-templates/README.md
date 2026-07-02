# AI Product Manager Templates

A set of working templates modeled on how product managers operate at frontier AI labs —
Anthropic, OpenAI, and Perplexity. These are not generic PM docs with "AI" bolted on; each one
maps to an artifact those teams actually produce.

## The templates

| # | Template | What it's for | Modeled on |
|---|----------|---------------|------------|
| 1 | [AI PRD](./01-ai-prd.md) | Spec a feature whose core behavior is non-deterministic | Anthropic ("crisp PRDs that account for non-deterministic behavior") |
| 2 | [Model Behavior Spec](./02-model-behavior-spec.md) | Define how the AI should behave — objectives, rules, defaults, worked examples | OpenAI's public Model Spec |
| 3 | [Eval Plan](./03-eval-plan.md) | Golden dataset, failure-mode taxonomy, graders, ship thresholds | OpenAI ("writing evals is a core PM skill" — Kevin Weil, CPO) |
| 4 | [Capability Exposure Decision](./04-capability-exposure-decision.md) | Decide which model capabilities to expose, to whom, and when | Anthropic PM charter |
| 5 | [Launch Readiness Review](./05-launch-readiness-review.md) | Go/no-go gate: eval scores, red-team results, rollback plan, iterative-deployment stages | Anthropic launch process + OpenAI iterative deployment |
| 6 | [Safety & Usage Policy Review](./06-safety-usage-policy-review.md) | Usage policies, rate limits, misuse scenarios, mitigations | Anthropic ("PMs set usage policies and rate limits") |
| 7 | [Quarterly Plan & Weekly Goals](./07-quarterly-plan.md) | Measurable (threshold/boolean) quarterly objectives + "75% weekly goals" | Perplexity's planning system |
| 8 | [Post-Launch Learning Loop](./08-post-launch-review.md) | Postmortem + feedback quantification so improvements compound | Anthropic post-launch loops + Perplexity postmortems |

## How to use them

- Start with **#1 (AI PRD)** for any new feature; it links out to #2 and #3 rather than duplicating them.
- **#3 (Eval Plan)** is the one most PMs skip and frontier labs never do — the quality of your evals caps the quality of your product.
- **#5 (Launch Readiness)** is the gate. Nothing ships on vibes; it ships when the numbers in #3 clear the thresholds and #6 is signed off.
- Documents are meant to *replace meetings*, not summarize them. Write them so a reader can decide async.

## Sources

- [How Anthropic's product team moves faster than anyone else — Cat Wu, Lenny's Podcast](https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves)
- [Kevin Weil (OpenAI CPO) on evals as a core PM skill — Lenny's Podcast](https://www.lennysnewsletter.com/p/kevin-weil-open-ai)
- [How Perplexity builds product — Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-perplexity-builds-product)
- [OpenAI Model Spec](https://model-spec.openai.com/)
- [Anthropic PM role descriptions (Greenhouse job board)](https://job-boards.greenhouse.io/anthropic)
- [Evals for PMs — Braintrust](https://www.braintrust.dev/blog/evals-for-pms)
