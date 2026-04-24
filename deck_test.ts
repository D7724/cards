import { assertEquals } from "@std/assert/equals";
import { Deck } from "./deck.ts";

Deno.test("Deck class should be instantiated correctly", () => {
  const deck = new Deck();
  deck.printDeck();
  assertEquals(deck.deck.length, 36);
});
