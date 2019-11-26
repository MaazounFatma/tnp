export class Article {
    private _Nom: string;
    private _id: number;
    private _prix: number;
    private _photo: string;
    private _disp: boolean;
    private _dateF: string;
    private _re: string;
    private _cit: string;


    constructor(Nom: string, id: number, prix: number, photo: string, disp: boolean, dateF: string, res: string, cit: string) {
        this._Nom = Nom;
        this._id = id;
        this._prix = prix;
        this._photo = photo;
        this._disp = disp;
        this._dateF = dateF;
        this._re = res;
        this._cit = cit;
    }
    public get Nom(): string {
        return this._Nom;
    }
    public set Nom(value: string) {
        this._Nom = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get disp(): boolean {
        return this._disp;
    }
    public set disp(value: boolean) {
        this._disp = value;
    }
    public get dateF(): string {
        return this._dateF;
    }
    public set dateF(value: string) {
        this._dateF = value;
    }
    public get re(): string {
        return this._re;
    }
    public set re(value: string) {
        this._re = value;
    }
    public get cit(): string {
        return this._cit;
    }
    public set cit(value: string) {
        this._cit = value;
    }


}