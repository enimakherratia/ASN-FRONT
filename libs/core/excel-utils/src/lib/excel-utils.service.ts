import { Injectable } from '@angular/core';
import { readExcelFile } from './excel-utils';

@Injectable({
  providedIn: 'root',
})
export class ExcelUtilsService {
  readFile(file: File): Promise<any[]> {
    return readExcelFile(file);
  }
}
