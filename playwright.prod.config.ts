import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import config from "./playwright.config";

const PORT = process.env.PORT ?? "3000";

const injectFromEnvFile = () => {
  const envDir = ".";
  const envFiles = [
    /** default file */ `.env`,
    /** local file */ `.env.local`,
    /** mode file */ `.env.playwright`,
    /** mode local file */ `.env.playwright.local`,
  ];

  envFiles.forEach((file) => {
    const filePath = path.join(envDir, file);
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath });
    }
  });
};

injectFromEnvFile();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...config,

  /* Run your local dev server before starting the tests */
  webServer: [
    {
      command: `bun run build && PORT=${PORT} bun .next/standalone/server.js`,
      url: `http://localhost:${PORT}`,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
