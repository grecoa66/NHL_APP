export class Team {
    private _teamId: number;
    private _name: string;
    private _city: string;
    private _abbrv: string;
    private _wins: number;
    private _losses: number;
    private _overtimeLosses: number;
    private _points: number;
    private _rank: number;
    private _goalsFor: number;
    private _goalsAgainst: number;
    private _goalDifferential: number;
    private _ppp: number;


    constructor(teamId: number,
                name: string,
                city: string,
                abbrv: string,
                wins: number,
                losses: number,
                overtimeLosses: number,
                points: number,
                rank: number,
                goalsFor: number,
                goalsAgainst: number,
                ppp: number
    ) {
        this._teamId = teamId;
        this._name = name;
        this._city = city;
        this._abbrv = abbrv;
        this._wins = wins;
        this._losses = losses;
        this._overtimeLosses = overtimeLosses;
        this._points = points;
        this._rank = rank;
        this._goalsFor = goalsFor;
        this._goalsAgainst = goalsAgainst;
        this._ppp = ppp;
    }

    get teamId(): number {
        return this._teamId;
    }

    set teamId(value: number) {
        this._teamId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get abbrv(): string {
        return this._abbrv;
    }

    set abbrv(value: string) {
        this._abbrv = value;
    }

    get wins(): number {
        return this._wins;
    }

    set wins(value: number) {
        this._wins = value;
    }

    get losses(): number {
        return this._losses;
    }

    set losses(value: number) {
        this._losses = value;
    }

    get overtimeLosses(): number {
        return this._overtimeLosses;
    }

    set overtimeLosses(value: number) {
        this._overtimeLosses = value;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }

    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }

    get goalsFor(): number {
        return this._goalsFor;
    }

    set goalsFor(value: number) {
        this._goalsFor = value;
    }

    get goalsAgainst(): number {
        return this._goalsAgainst;
    }

    set goalsAgainst(value: number) {
        this._goalsAgainst = value;
    }

    get goalDifferential(): number {
        return this.goalsFor - this.goalsAgainst;
    }

    get ppp(): number {
        return this._ppp;
    }

    set ppp(value: number) {
        this._ppp = value;
    }
}
