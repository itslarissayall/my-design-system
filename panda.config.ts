

import preset from "./src/theme";
import { config } from "./src/theme/conditions";
import { semanticTokens } from "./src/theme/semantic-tokens";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: [preset],
  conditions: config.conditions,
  theme: {
    semanticTokens: semanticTokens,
  },
  outdir: "src/styled-system",
  jsxFramework: "react",
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
});

