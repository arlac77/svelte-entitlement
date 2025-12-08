// @ts-check
import { test, expect } from "@playwright/test";

test("log canvas present", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.locator(".entitlement")).toContainText("e1");
});
