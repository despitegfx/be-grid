import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BeGridComponent } from './component/be-grid/be-grid.component';
import { BeButtonComponent } from './component/be-button/be-button.component';
import { BeContextMenuComponent } from './component/be-context-menu/be-context-menu.component';
import {MatTableExporterModule} from "mat-table-exporter";
import {ContextMenuService} from "./component/be-context-menu/context-menu.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    BeGridComponent,
    BeButtonComponent,
    BeContextMenuComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule,
    MatTableExporterModule
  ],
  exports: [
    BeGridComponent,
    BeButtonComponent,
    BeContextMenuComponent
  ],
  providers: [  ContextMenuService ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class BeGridModule { }
