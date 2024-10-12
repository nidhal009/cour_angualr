export class Voiture {
    public get numSerie(): string {
        return this._numSerie;
    }
    public set numSerie(value: string) {
        this._numSerie = value;
    }
    public get modele(): string {
        return this._modele;
    }
    public set modele(value: string) {
        this._modele = value;
    }
    public get marque(): string {
        return this._marque;
    }
    public set marque(value: string) {
        this._marque = value;
    }
    constructor(private _marque: string, private _modele: string, private _numSerie: string){

    }
}
