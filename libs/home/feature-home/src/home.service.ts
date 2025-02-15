import { ApiService } from '@myproject/core/http-client';
import { Injectable, inject } from '@angular/core';
import {map, Observable} from 'rxjs';
import {tapResponse} from "@ngrx/operators";

@Injectable({ providedIn: 'root' })
export class HomeService {
  private readonly apiService = inject(ApiService);

  saveExcelData(excelData: any): Observable<any> {
    return this.apiService.post('/kraken', excelData).pipe(
      tapResponse(
        (response) => {
          console.log('Excel data successfully saved:', response);
        },
        (error) => {
          console.error('Error saving Excel data:', error);
        }
      )
    );
  }

}
