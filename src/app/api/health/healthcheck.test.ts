import { describe, expect, it } from "bun:test";
import { GET } from "./route";

describe("api", () => {
  describe("healthcheck", () => {
    it("should return a 200 status with the correct JSON body", async () => {
      const response = GET();

      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toEqual({ status: "ok" });
    });
  });
});
