import { assertEquals } from "@std/assert";
import { Card, Color, Value } from "./cards.ts";

Deno.test("Card class should be instantiated correctly", () => {
  const card = new Card(Color.Rosen, Value.Ass);
  assertEquals(card.color, Color.Rosen);
  assertEquals(card.value, Value.Ass);
});

Deno.test("Card beats another card by value", () => {
  const card1 = new Card(Color.Schellen, Value.Ass);
  const card2 = new Card(Color.Schellen, Value.König);
  const result = card1.beats(card2);
  assertEquals(result, true);
});

Deno.test("Card beats another card by color", () => {
  const card1 = new Card(Color.Schellen, Value.Ass);
  const card2 = new Card(Color.Eicheln, Value.Ass);
  const result = card1.beats(card2);
  assertEquals(result, true);
});
