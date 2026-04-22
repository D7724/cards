import { assertEquals } from "@std/assert";
import { hello } from "./cards.ts";

Deno.test("hello world", () => {
  assertEquals(hello(), "world");
});
