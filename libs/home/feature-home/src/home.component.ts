import {Component, ChangeDetectionStrategy, inject, effect, untracked, input} from '@angular/core';
import { NgClass } from '@angular/common';
import { HomeStore } from './home.store';
import { ExcelUtilsService } from '@myproject/core/excel-utils';

import { AuthStore } from '@myproject/auth/data-access';
import {User} from "@myproject/core/api-types";

@Component({
  selector: 'cdt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgClass],
  providers: [HomeStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  file: any;
  private readonly authStore = inject(AuthStore);
  private readonly homeStore = inject(HomeStore);
  protected readonly dataSaved = this.homeStore.dataSaved;

  constructor(private excelUtils: ExcelUtilsService){
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  handleFileUpload(): void {
    if (!this.file) {
      alert('Please select an Excel file first.');
      return;
    }

    // Lire et normaliser les données du fichier Excel
    this.excelUtils.readFile(this.file).then((jsonData) => {
      this.homeStore.saveData(jsonData);
    })
  }

}
