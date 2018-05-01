import {ColumnOptions} from "./column-sort";
export abstract class SortableListComponent{
    colData: ColumnOptions;

    constructor(colData : ColumnOptions){
        this.colData = colData;
    }

    sortTable(column) : void {
        this.colData.previousCol = this.colData.col;
        this.colData.col = column;
        this.colData.isDesc = (this.colData.previousCol !== this.colData.col) ? true : !this.colData.isDesc;
        this.colData.direction = this.colData.isDesc ? 1 : -1;
    }
}
