export class Commentaire {
  public get message(): string {
      return this._message;
  }
  public set message(value: string) {
      this._message = value;
  }
  public get date(): Date {
      return this._date;
  }
  public set date(value: Date) {
      this._date = value;
  }
  public get nom(): string {
      return this._nom;
  }
  public set nom(value: string) {
      this._nom = value;
  }
  constructor(
    private _nom: string,
    private _date: Date,
    private _message: string
  ) {}
}
