import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAdmission } from './admission';
import { AdmissionService } from './admission.service';

@Component({
  templateUrl: './admission-detail.component.html',
  styleUrls: ['./admission-detail.component.css']
})
export class AdmissionDetailComponent implements OnInit {
  pageTitle = 'Admission Detail';
  errorMessage = '';
  admission: IAdmission | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private admissionService: AdmissionService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAdmission(id);
    }
  }

  getAdmission(id: number) {
    this.admissionService.getAdmission(id).subscribe(
      admission => this.admission = admission,
      error => this.errorMessage = error as any);
  }

  onBack(): void {
    this.router.navigate(['/admissions']);
  }

}
