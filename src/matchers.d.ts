import type { expect } from "bun:test";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

/* oxlint-disable typescript/no-empty-object-type */
declare module "bun:test" {
  interface Matchers<T> extends TestingLibraryMatchers<
    typeof expect.stringContaining,
    T
  > {}
  interface AsymmetricMatchers extends TestingLibraryMatchers {}
}
/* oxlint-enable typescript/no-empty-object-type */
