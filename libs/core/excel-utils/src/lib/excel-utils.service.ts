import { Injectable } from '@angular/core';
import { readExcelFile, transformData } from './excel-utils';

@Injectable({
  providedIn: 'root',
})
export class ExcelUtilsService {
  readFile(file: File): Promise<any[]> {
    return readExcelFile(file);
  }

  normalizeData(data: any[]): any[] {
    return transformData(data);
  }
}
