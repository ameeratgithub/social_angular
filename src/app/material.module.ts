import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatDividerModule,
  MatTreeModule, MatCardModule, MatMenuModule, MatTooltipModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatTabsModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';
const modules = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatDividerModule,
  MatTreeModule, MatCardModule, MatMenuModule, MatTooltipModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatChipsModule, MatAutocompleteModule, MatBadgeModule, MatTabsModule,
  MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatSnackBarModule
];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
