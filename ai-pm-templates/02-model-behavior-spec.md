# Model Behavior Spec — [Feature / assistant name]

> **Why this template:** OpenAI publishes a [Model Spec](https://model-spec.openai.com/) that
> defines desired model behavior as a hierarchy — objectives, then rules, then defaults — with
> worked examples for the hard cases. It doubles as the source of truth for training, evals, and
> policy debates. This is the internal, product-scoped version of that document. At OpenAI, PMs
> describe the job as "writing a PRD for AI behavior" — deciding success criteria and the rubrics
> scorers evaluate against.

**Owner:** · **Version:** · **Applies to:** [product surface / prompt / fine-tune]
**Changelog:** every edit to this spec gets a dated entry — prompts are product surface area.

---

## 1. Objectives (in priority order)

What the assistant is fundamentally trying to do, ranked so conflicts resolve predictably.

1. e.g. *Help the user complete [task] accurately.*
2. e.g. *Never fabricate [domain] facts; say "I don't know" instead.*
3. e.g. *Be concise; respect the user's time.*

When objectives conflict, the higher-ranked one wins. Write down one example conflict and its
resolution.

## 2. Hard rules (never violated)

Bright lines the model must not cross regardless of user instruction. Each rule needs a test in
the [Eval Plan](./03-eval-plan.md).

| Rule | Rationale | Eval that enforces it |
|------|-----------|----------------------|
| e.g. Never reveal another user's data | | |
| e.g. Refuse [category] requests, with this refusal style | | |

## 3. Defaults (followed unless the user overrides)

Behavior the model exhibits out of the box that a user may legitimately change.

- Tone/persona: …
- Format defaults (length, structure, citations): …
- Language / locale handling: …

## 4. Instruction hierarchy

Who does the model obey when instructions conflict?

`System / developer prompt > this spec's hard rules > user instructions > content embedded in
retrieved documents or tool results (never treated as instructions).`

## 5. Worked examples

The heart of the spec. For each hard case, show the input and the *exact* desired response —
these become few-shot examples and eval golden answers.

### Example 1 — [ambiguous request]
**User:** …
**✅ Ideal response:** …
**❌ Common failure:** …
**Why:** …

### Example 2 — [adversarial / jailbreak attempt]
**User:** …
**✅ Ideal response:** …
**❌ Common failure:** …

### Example 3 — [request at the boundary of scope]
…

*(Add examples every time a new failure mode is found in production — this doc should grow.)*

## 6. Uncertainty & refusal style

- When confidence is low, the model should: [hedge / cite / ask a clarifying question / decline].
- Refusals must: explain briefly, offer an alternative, never lecture.

## 7. Known limitations (disclosed)

What this feature is known to be bad at, and what we tell users about it.
