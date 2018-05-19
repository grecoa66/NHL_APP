
import {Periods} from './periods';

export class Gamelog {

    private _homeTeamName : string;
    private _homeTeamCity : string;
    private _homeTeamID : number;
    private _homeTeamScore : number;
    private _homeTeamShots : number;
    private _awayTeamName : string;
    private _awayTeamCity : string;
    private _awayTeamID : number;
    private _awayTeamScore : number;
    private _awayTeamShots : number;
    private _location : string;
    private _periods : Periods[];


    constructor(
        homeTeamName: string,
        homeTeamCity: string,
        homeTeamID: number,
        homeTeamScore: number,
        homeTeamShots: number,
        awayTeamName: string,
        awayTeamCity: string,
        awayTeamID: number,
        awayTeamScore: number,
        awayTeamShots: number,
        location: string,
        periods: Periods[]
    ) {
        this._homeTeamName = homeTeamName;
        this._homeTeamCity = homeTeamCity;
        this._homeTeamID = homeTeamID;
        this._homeTeamScore = homeTeamScore;
        this._homeTeamShots = homeTeamShots;
        this._awayTeamName = awayTeamName;
        this._awayTeamCity = awayTeamCity;
        this._awayTeamID = awayTeamID;
        this._awayTeamScore = awayTeamScore;
        this._awayTeamShots = awayTeamShots;
        this._location = location;
        this._periods = periods;
    }

    get homeTeamName(): string {
        return this._homeTeamName;
    }

    set homeTeamName(value: string) {
        this._homeTeamName = value;
    }

    get homeTeamCity(): string {
        return this._homeTeamCity;
    }

    set homeTeamCity(value: string) {
        this._homeTeamCity = value;
    }

    get homeTeamID(): number {
        return this._homeTeamID;
    }

    set homeTeamID(value: number) {
        this._homeTeamID = value;
    }

    get homeTeamScore(): number {
        return this._homeTeamScore;
    }

    set homeTeamScore(value: number) {
        this._homeTeamScore = value;
    }

    get awayTeamName(): string {
        return this._awayTeamName;
    }

    set awayTeamName(value: string) {
        this._awayTeamName = value;
    }

    get awayTeamCity(): string {
        return this._awayTeamCity;
    }

    set awayTeamCity(value: string) {
        this._awayTeamCity = value;
    }

    get awayTeamID(): number {
        return this._awayTeamID;
    }

    set awayTeamID(value: number) {
        this._awayTeamID = value;
    }

    get awayTeamScore(): number {
        return this._awayTeamScore;
    }

    set awayTeamScore(value: number) {
        this._awayTeamScore = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get periods(): Periods[] {
        return this._periods;
    }

    set periods(value: Periods[]) {
        this._periods = value;
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
