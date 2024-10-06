import { Commentaire } from './commentaire';

export class Pizza {
  public get comments(): Commentaire[] {
      return this._comments;
  }
  public set comments(value: Commentaire[]) {
      this._comments = value;
  }
  public get vegetarien(): boolean {
    return this._vegetarien;
  }
  public set vegetarien(value: boolean) {
    this._vegetarien = value;
  }
  public get prix(): number {
    return this._prix;
  }
  public set prix(value: number) {
    this._prix = value;
  }
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
  constructor(
    private _nom: string,
    private _image: string,
    private _prix: number,
    private _vegetarien: boolean,
    private _comments: Commentaire[]
  ) {}
}
