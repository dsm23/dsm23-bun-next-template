import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Button, buttonVariants } from ".";

describe("component", () => {
  describe("Button", () => {
    it("should render correctly", () => {
      render(<Button>Hello, World!</Button>);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render correctly, with render prop", () => {
      render(
        <a href="#" className={buttonVariants()}>
          Hello, World!
        </a>,
      );

      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });
});
