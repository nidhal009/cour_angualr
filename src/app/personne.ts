export class Personne {
  public get isEtudiant(): boolean {
      return this._isEtudiant;
  }
  public set isEtudiant(value: boolean) {
      this._isEtudiant = value;
  }
  constructor(
    private _nom: string,
    private _age: number,
    private _isEtudiant: boolean
  ) {}
 
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
}
