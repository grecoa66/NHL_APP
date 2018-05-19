
export class Periods {

    private _periodNumber: number;
    private _homeTeamGoals: number;
    private _homeTeamShots: number;
    private _awayTeamGoals: number;
    private _awayTeamShots: number;


    constructor(
        periodNumber: number,
        homeTeamGoals: number,
        homeTeamShots: number,
        awayTeamGoals: number,
        awayTeamShots: number
    ) {
        this._periodNumber = periodNumber;
        this._homeTeamGoals = homeTeamGoals;
        this._homeTeamShots = homeTeamShots;
        this._awayTeamGoals = awayTeamGoals;
        this._awayTeamShots = awayTeamShots;
    }

    get periodNumber(): number {
        return this._periodNumber;
    }

    set periodNumber(value: number) {
        this._periodNumber = value;
    }

    get homeTeamGoals(): number {
        return this._homeTeamGoals;
    }

    set homeTeamGoals(value: number) {
        this._homeTeamGoals = value;
    }

    get awayTeamGoals(): number {
        return this._awayTeamGoals;
    }

    set awayTeamGoals(value: number) {
        this._awayTeamGoals = value;
    }


    get homeTeamShots(): number {
        return this._homeTeamShots;
    }

    set homeTeamShots(value: number) {
        this._homeTeamShots = value;
    }

    get awayTeamShots(): number {
        return this._awayTeamShots;
    }

    set awayTeamShots(value: number) {
        this._awayTeamShots = value;
    }
}
