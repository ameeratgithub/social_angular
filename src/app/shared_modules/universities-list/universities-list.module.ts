import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesListComponent } from './universities-list/universities-list.component';
import { UniversityItemComponent } from './universities-list/university-item/university-item.component';
import { SharedModule } from '../../shared/shared.module';
import { UniversityService } from './services/university/university.service';

@NgModule({
  declarations: [
    UniversitiesListComponent, UniversityItemComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  providers:[
    UniversityService
  ],
  exports: [
    UniversitiesListComponent, UniversityItemComponent
  ]
})
export class UniversitiesListModule { }
