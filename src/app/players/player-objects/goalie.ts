import {Player} from "./player";

export class Goalie extends Player {

    private _wins: number;
    private _losses: number;
    private _overtimeLosses: number;
    private _goalsAgainst: number;
    private _saves: number;
    private _goalsAgainstAverage: number;
    private _savePercentage: number;
    private _shutouts: number;

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
        wins: number,
        losses: number,
        overtimeLosses: number,
        goalsAgainst: number,
        saves: number,
        goalsAgainstAverage: number,
        savePercentage: number,
        shutouts: number
    ) {
        super(
            playerId,
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
            teamId
        );

        this._wins = wins;
        this._losses = losses;
        this._overtimeLosses = overtimeLosses;
        this._goalsAgainst = goalsAgainst;
        this._saves = saves;
        this._goalsAgainstAverage = goalsAgainstAverage;
        this._savePercentage = savePercentage;
        this._shutouts = shutouts;
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

    get goalsAgainst(): number {
        return this._goalsAgainst;
    }

    set goalsAgainst(value: number) {
        this._goalsAgainst = value;
    }

    get saves(): number {
        return this._saves;
    }

    set saves(value: number) {
        this._saves = value;
    }

    get goalsAgainstAverage(): number {
        return this._goalsAgainstAverage;
    }

    set goalsAgainstAverage(value: number) {
        this._goalsAgainstAverage = value;
    }

    get savePercentage(): number {
        return this._savePercentage;
    }

    set savePercentage(value: number) {
        this._savePercentage = value;
    }

    get shutouts(): number {
        return this._shutouts;
    }

    set shutouts(value: number) {
        this._shutouts = value;
    }
}
