import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: [
    "eslint",
    "jsx-a11y",
    "nextjs",
    "oxc",
    "promise",
    "react",
    "typescript",
    "unicorn",
  ],
  jsPlugins: ["eslint-plugin-tailwind-canonical-classes"],
  categories: {
    correctness: "warn",
    suspicious: "warn",
    pedantic: "warn",
    perf: "warn",
    restriction: "warn",
    nursery: "warn",
  },
  env: {
    builtin: true,
    browser: true,
    serviceworker: true,
  },
  globals: {
    process: "readonly",
  },
  ignorePatterns: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
    "storybook-static/**",
  ],
  options: {
    typeAware: true,
  },
  rules: {
    "max-lines": "off",
    "max-lines-per-function": [
      "warn",
      {
        max: 200,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    "no-warning-comments": "off",
    "no-inline-comments": "off",
    "no-undefined": "off",
    "no-void": [
      "warn",
      {
        allowAsStatement: true,
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["debug", "error", "info", "trace", "warn"],
      },
    ],
    "no-empty-function": ["warn", { allow: ["arrowFunctions"] }],
    "no-negated-condition": "off",
    "no-optional-chaining": "off",
    "no-restricted-imports": [
      "warn",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message:
              "Named * React import is not allowed. Please import what you need from React with Named Imports",
          },
        ],
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/heading-has-content": "off",
    "oxc/no-async-await": "off",
    "oxc/no-rest-spread-properties": "off",
    "react/button-has-type": "off",
    // TODO: remove when it supports tsx
    "react/jsx-filename-extension": "off",
    "react/no-multi-comp": "off",
    "react/only-export-components": "off",
    // "react/only-export-components": [
    //   "warn",
    //   {
    //     allowExportNames: [
    //       "metadata",
    //       "viewport",
    //       "generateMetadata",
    //       "generateStaticParams",
    //       "dynamic",
    //       "revalidate",
    //       "fetchCache",
    //       "runtime",
    //       "preferredRegion",
    //     ],
    //   },
    // ],
    "react/react-in-jsx-scope": "off",
    "tailwind-canonical-classes/tailwind-canonical-classes": [
      "warn",
      {
        cssPath: "./src/app/globals.css",
      },
    ],
    "typescript/consistent-type-imports": [
      "warn",
      {
        disallowTypeAnnotations: false,
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],
    "typescript/explicit-function-return-type": "off",
    "typescript/explicit-module-boundary-types": "off",
    "typescript/no-confusing-void-expression": "off",
    "typescript/no-unsafe-type-assertion": "off",
    "typescript/prefer-readonly-parameter-types": "off",
    "typescript/strict-boolean-expressions": "off",
    "unicorn/filename-case": [
      "warn",
      {
        case: "camelCase",
      },
    ],
    "vitest/consistent-vitest-vi": "warn",
    "vitest/no-importing-vitest-globals": "warn",
  },
  overrides: [
    {
      files: [
        "**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
        "**/*.story.@(ts|tsx|js|jsx|mjs|cjs)",
      ],
      rules: {
        "storybook/await-interactions": "warn",
        "storybook/context-in-play-function": "warn",
        "storybook/default-exports": "warn",
        "storybook/hierarchy-separator": "warn",
        "storybook/no-redundant-story-name": "warn",
        "storybook/no-renderer-packages": "warn",
        "storybook/prefer-pascal-case": "warn",
        "storybook/story-exports": "warn",
        "storybook/use-storybook-expect": "warn",
        "storybook/use-storybook-testing-library": "warn",
      },
      jsPlugins: ["eslint-plugin-storybook"],
      plugins: ["import"],
    },
    {
      files: [".storybook/main.@(js|cjs|mjs|ts)"],
      rules: {
        "storybook/no-uninstalled-addons": "warn",
      },
      jsPlugins: ["eslint-plugin-storybook"],
    },
    {
      files: [".storybook/main.@(js|cjs|mjs|ts)"],
      rules: {
        "storybook/no-uninstalled-addons": "warn",
      },
      jsPlugins: ["eslint-plugin-storybook"],
    },
  ],
});
