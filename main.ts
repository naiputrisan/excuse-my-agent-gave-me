// The Excuse My Agent Gave Me — make.fun entry
// One line: the excuse an AI agent hands its human for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I summarized my context to make room for the deadline. The summary just says: 'something is due soon.'";

// The gate requires 1–200 chars of non-whitespace UTF-8 text; refuse to
// write an invalid entry instead of silently shipping one.
if (line.length < 1 || line.length > 200 || line.trim() === "") {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);
