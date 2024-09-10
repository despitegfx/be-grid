import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { BeGridComponent } from './component/be-grid/be-grid.component';
import { BeButtonComponent } from './component/be-button/be-button.component';
import { BeContextMenuComponent } from './component/be-context-menu/be-context-menu.component';

@NgModule({
  declarations: [
    BeGridComponent,
    BeButtonComponent,
    BeContextMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    CdkDropList, 
    CdkDrag
  ],
  exports: [
    BeGridComponent,
    BeButtonComponent,
    BeContextMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class BeGridModule { }
