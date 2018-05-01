export class ColumnOptions {

    private _isDesc : boolean;
    private _col: string;
    private _previousCol: string;
    private _direction: number;

    constructor(isDesc: boolean, col: string, previousCol: string, direction: number) {
        this._isDesc = isDesc;
        this._col = col;
        this._previousCol = previousCol;
        this._direction = direction;
    }


    get isDesc(): boolean {
        return this._isDesc;
    }

    set isDesc(value: boolean) {
        this._isDesc = value;
    }

    get col(): string {
        return this._col;
    }

    set col(value: string) {
        this._col = value;
    }

    get previousCol(): string {
        return this._previousCol;
    }

    set previousCol(value: string) {
        this._previousCol = value;
    }

    get direction(): number {
        return this._direction;
    }

    set direction(value: number) {
        this._direction = value;
    }
}
