import {Player} from "./player";

export class Skater extends Player{

    private _goals: number;
    private _assists: number;
    private _points: number;
    private _plusMinus: number;
    private _shots: number;
    private _shotPercentage: number;
    private _pims: number;
    private _ppp: number;
    private _shg: number;
    private _hits: number;
    private _fop: number;

    constructor(
        playerId: number,
        lastName: string,
        firstName: string,
        jerseyNumber: number,
        position: string,
        height: string,
        weight: number,
        birthday: string,
        age: number,
        birthCity: string,
        birthCountry: string,
        isRookie: boolean,
        teamCity: string,
        teamName: string,
        teamAbbrv: string,
        teamId: number,
        gamesPlayed: number,
        goals: number,
        assists: number,
        points: number,
        plusMinus: number,
        shots: number,
        shotPercentage: number,
        pims: number,
        ppp: number,
        shg: number,
        hits: number,
        fop: number
    ) {
        super(playerId,
            lastName,
            firstName,
            jerseyNumber,
            position,
            height,
            weight,
            birthday,
            age,
            birthCity,
            birthCountry,
            isRookie,
            teamCity,
            teamName,
            teamAbbrv,
            teamId,
            gamesPlayed);

        this._goals = goals;
        this._assists = assists;
        this._points = points;
        this._plusMinus = plusMinus;
        this._shots = shots;
        this._shotPercentage = shotPercentage;
        this._pims = pims;
        this._ppp = ppp;
        this._shg = shg;
        this._hits = hits;
        this._fop = fop;

    }

    get goals(): number {
        return this._goals;
    }

    set goals(value: number) {
        this._goals = value;
    }

    get assists(): number {
        return this._assists;
    }

    set assists(value: number) {
        this._assists = value;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }

    get plusMinus(): number {
        return this._plusMinus;
    }

    set plusMinus(value: number) {
        this._plusMinus = value;
    }

    get shots(): number {
        return this._shots;
    }

    set shots(value: number) {
        this._shots = value;
    }

    get shotPercentage(): number {
        return this._shotPercentage;
    }

    set shotPercentage(value: number) {
        this._shotPercentage = value;
    }

    get pims(): number {
        return this._pims;
    }

    set pims(value: number) {
        this._pims = value;
    }

    get ppp(): number {
        return this._ppp;
    }

    set ppp(value: number) {
        this._ppp = value;
    }

    get shg(): number {
        return this._shg;
    }

    set shg(value: number) {
        this._shg = value;
    }

    get hits(): number {
        return this._hits;
    }

    set hits(value: number) {
        this._hits = value;
    }

    get fop(): number {
        return this._fop;
    }

    set fop(value: number) {
        this._fop = value;
    }
}
