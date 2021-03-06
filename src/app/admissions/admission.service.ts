import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IAdmission } from './admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private admissionUrl = 'api/admissions/admissions.json';

  constructor(private http: HttpClient) { }

  getAdmissions(): Observable<IAdmission[]> {
    return this.http.get<IAdmission[]>(this.admissionUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAdmission(id: number): Observable<IAdmission | undefined> {
    return this.getAdmissions().pipe(
      map((admissions: IAdmission[]) => admissions.find(p => p.admissionId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
