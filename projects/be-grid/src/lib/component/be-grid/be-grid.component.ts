import {Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import DefColumns from '../../model/DefColumns';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatPaginator} from '@angular/material/paginator';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'be-grid',
  templateUrl: './be-grid.component.html',
  styleUrls: ['./be-grid.component.css']
})
export class BeGridComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  width?: string = "0"

  @Input()
  height?: string = "0"

  @Input()
  rowData: any[] = [];

  @Input()
  defColumns: DefColumns[] = [];

  @Input()
  paging?: boolean = false;

  @Input()
  filter?: boolean = false;

  @Input()
  actionColumnSticky?: boolean = false;

  @Input()
  columnPanel?: boolean = false;

  @Input()
  toggleSearchResult?: boolean = false;

  @Input()
  pageSizeOptions: number[] = [];

  @Input()
  xColumnsExport?: number[] = []

  @Input()
  exportFileName?: string = "table-export"

//emit events
  @Output()
  rowClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onActionButton: EventEmitter<any> = new EventEmitter();

  @Output()
  rowSelection: EventEmitter<any> = new EventEmitter();

  @Output()
  searchResult: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  pageChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  displayedColumns: string[] = [];
  tableRowData: any = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  additionalColumns: string[] = []

  contextmenu: boolean = false;
  contextmenuX: number = 0;
  contextmenuY: number = 0;

  constructor(private liveAnnouncer: LiveAnnouncer) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const rows = changes['rowData'].currentValue;
    if(rows.length > 0) {
      this.tableRowData.data = rows
      this.additionalColumns = Object.keys({...this.rowData}[0])
    }
  }

  ngOnInit(): void {
    this.xColumnsExport = [5]
    this.displayedColumns = this.defColumns.map(cols => cols.name);
  }

  // column reassign sorted data
  ngAfterViewInit() {
    this.tableRowData.sort = this.sort;
    this.tableRowData.paginator = this.paginator;
  }

  // when row/cell is clicked
  onRowClick(row: any, event: any) {
    if(event.target.id != "appButton" && event.target.id != "actionRow"){
      this.rowClick.emit(row);
    }
  }

  // when action button on a row is clicked
  buttonClick(event:any) {
    this.onActionButton.emit(event);
  }

  // filtering/searching through table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableRowData.filter = filterValue.trim().toLowerCase();

    //checking and emit boolean result
    if(this.toggleSearchResult) { this.searchResult.emit(this.tableRowData.filteredData.length > 0) }
  }

  // column sort annouce sort change
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  // on drag column header
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }


// checkbox for cells and headers
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableRowData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.tableRowData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onRowSelection() {
    this.rowSelection.emit({selectedRows: this.selection.selected})
    //on row selection, hide context menu
    this.hideContextMenu()
  }


  // column panel
  // checking all displayedColumns in the column panel
  isDisplayedColumns(column: string): boolean {
    let isChecked = this.displayedColumns.find((data:any) => data === column)
    return !!isChecked
  }

  // adding and removing columns from displayedColumns
  addColumn(column: string){
    let isAvailable = this.displayedColumns.find((data:any) => data === column);

    if(isAvailable != undefined){
      this.displayedColumns = this.displayedColumns.filter((data:any) => data != column);
    } else {
      let insertAtIndex = this.displayedColumns.length - 1;
      let checkColumnExist = this.defColumns.find((data:any) => data.name === column);

      !checkColumnExist? this.defColumns.push({name: column}) : "";
      this.displayedColumns.splice(insertAtIndex, 0, column);
    }
  }

  //activates the menu with the coordinates
  onRightClick(event: any){
    this.contextmenuX=event.clientX
    this.contextmenuY=event.clientY
    this.contextmenu = true;
  }

  //disables the menu
  hideContextMenu(){
    this.contextmenu = false;
  }

  //emit current page size
  pageSizeChange(page: any) {
    this.pageChange.emit(page)
  }

}
