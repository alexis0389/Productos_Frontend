import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
