export class Employe {
    public get post(): string {
        return this._post;
    }
    public set post(value: string) {
        this._post = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get matricule(): number {
        return this._matricule;
    }
    public set matricule(value: number) {
        this._matricule = value;
    }
    constructor(private _matricule: number, private _nom: string,private _post: string){

    }
}
