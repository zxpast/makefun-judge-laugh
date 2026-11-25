// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// Writes one office-life joke (one line, under 200 characters) to
// /output/entry.txt. Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My review says I need to be more visible, so I now attend every meeting in a hi-vis vest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
