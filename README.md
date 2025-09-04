# 🎲 Coin Flip Advice (TypeScript + Promises)

## 🚀 Features
- Simulates a coin flip ('coinFlip').
- If you win → fetches advice using 'fetchAdviceById'.
- Uses **TypeScript** with **typed API response**.
- Promise chaining ('.then' / '.catch')

### 🧩 Functions
coinFlip(): Promise<"win" | "lose">

Simulates a coin flip.

Resolves with "win" or rejects with "lose".

fetchAdviceById(id: number): Promise<string>

Fetches a piece of advice from the Advice Slip API

Returns the advice text as a string.

### Example Output
Coin flip result: win
- 💡 Advice: "Don't count your chickens before they hatch."
- ❌ You lost the coin flip!

