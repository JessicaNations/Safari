import { Component, OnInit } from '@angular/core';

import { IAdmission } from './admission';
import { AdmissionService } from './admission.service';

@Component({
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.css']
})
export class AdmissionListComponent implements OnInit {
  pageTitle = 'Admission';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAdmissions = this.listFilter ? this.performFilter(this.listFilter) : this.admissions;
  }

  filteredAdmissions: IAdmission[] = [];
  admissions: IAdmission[] = [];

  constructor(private admissionService: AdmissionService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Admission: ' + message;
  }

  performFilter(filterBy: string): IAdmission[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.admissions.filter((admission: IAdmission) =>
      admission.admissionName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.admissionService.getAdmissions().subscribe(
      admissions => {
        this.admissions = admissions;
        this.filteredAdmissions = this.admissions;
      },
      error => this.errorMessage = <any>error
    );
  }
}
