export class Card {
  color: Color;
  value: Value;
  isPlayed: boolean = false;

  constructor(color: Color, value: Value) {
    this.color = color;
    this.value = value;
  }

  public beats(card: Card): boolean {
    if (this.value === card.value) {
      return this.color > card.color;
    }
    return this.value > card.value;
  }

  public play(): void {
    this.isPlayed = true;
  }

  public unplay(): void {
    this.isPlayed = false;
  }
}

export enum Color {
  Rosen = 4,
  Schellen = 3,
  Schilten = 2,
  Eicheln = 1,
}

export enum Value {
  Ass = 14,
  König = 13,
  Ober = 12,
  Under = 11,
  Banner = 10,
  Nine = 9,
  Eight = 8,
  Seven = 7,
  Six = 6,
}
