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
        fop: number)
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
