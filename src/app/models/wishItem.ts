export class WishItem {
  private static lastId: number = 5;
  public readonly id: number;

  constructor(public wishText: string, public isComplete: boolean = false) {
    WishItem.lastId++;
    this.id = WishItem.lastId;
  }
}
