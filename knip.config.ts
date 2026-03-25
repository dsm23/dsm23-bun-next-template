import type { KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-knipignore"],
  entry: ["src/**/*.d.ts"],
  ignoreDependencies: [
    "eslint-plugin-react-dom",
    "eslint-plugin-storybook",
    "eslint-plugin-tailwind-canonical-classes",
  ],
  bun: {
    config: ["bunfig.toml"],
  },
  oxlint: {
    config: ["oxlint.config.ts"],
  },
  playwright: {
    config: ["playwright.config.ts", "playwright.prod.config.ts"],
    entry: ["**/playwright-tests/*.@(spec|test).?(c|m)[jt]s?(x)"],
  },
};

export default config;
