export class Information {
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  private _title: string;
  public description: string;
  public smallImagePath: string;
  public bigImagePath: string;
  public date: Date;
  public id: number;
}
