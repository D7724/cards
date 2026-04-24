import { Card, Color, Value } from "./cards.ts";

export class Deck {
  deck: Card[] = [];

  constructor() {
    const colors = Object.values(Color).filter((v) =>
      typeof v === "number"
    ) as Color[];
    const values = Object.values(Value).filter((v) =>
      typeof v === "number"
    ) as Value[];

    for (const color of colors) {
      for (const value of values) {
        this.deck.push(new Card(color, value));
      }
    }
    this.deck.sort(() => Math.random() - 0.5);
  }

  printDeck(): void {
    for (const card of this.deck) {
      console.log(`${Color[card.color]} ${Value[card.value]}`);
    }
  }
}
