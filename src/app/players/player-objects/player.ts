export class Player{

    private _playerId: number;
    private _lastName: string;
    private _firstName: string;
    private _jerseyNumber: number;
    private _position: string;
    private _height: string;
    private _weight: number;
    private _birthday: string;
    private _age: number;
    private _birthCity: string;
    private _birthCountry: string;
    private _isRookie: boolean;
    private _teamCity: string;
    private _teamName: string;
    private _teamAbbrv: string;
    private _teamId: number;
    private _gamesPlayed: number;


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
        gamesPlayed: number)
    {
        this._playerId = playerId;
        this._lastName = lastName;
        this._firstName = firstName;
        this._jerseyNumber = jerseyNumber;
        this._position = position;
        this._height = height;
        this._weight = weight;
        this._birthday = birthday;
        this._age = age;
        this._birthCity = birthCity;
        this._birthCountry = birthCountry;
        this._isRookie = isRookie;
        this._teamCity = teamCity;
        this._teamName = teamName;
        this._teamAbbrv = teamAbbrv;
        this._teamId = teamId;
        this._gamesPlayed = gamesPlayed;
    }

    get playerId(): number {
        return this._playerId;
    }

    set playerId(value: number) {
        this._playerId = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get jerseyNumber(): number {
        return this._jerseyNumber;
    }

    set jerseyNumber(value: number) {
        this._jerseyNumber = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }

    get height(): string {
        return this._height;
    }

    set height(value: string) {
        this._height = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get birthCity(): string {
        return this._birthCity;
    }

    set birthCity(value: string) {
        this._birthCity = value;
    }

    get birthCountry(): string {
        return this._birthCountry;
    }

    set birthCountry(value: string) {
        this._birthCountry = value;
    }

    get isRookie(): boolean {
        return this._isRookie;
    }

    set isRookie(value: boolean) {
        this._isRookie = value;
    }

    get teamCity(): string {
        return this._teamCity;
    }

    set teamCity(value: string) {
        this._teamCity = value;
    }

    get teamName(): string {
        return this._teamName;
    }

    set teamName(value: string) {
        this._teamName = value;
    }

    get teamAbbrv(): string {
        return this._teamAbbrv;
    }

    set teamAbbrv(value: string) {
        this._teamAbbrv = value;
    }

    get teamId(): number {
        return this._teamId;
    }

    set teamId(value: number) {
        this._teamId = value;
    }


    get gamesPlayed(): number {
        return this._gamesPlayed;
    }

    set gamesPlayed(value: number) {
        this._gamesPlayed = value;
    }


}
