import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class AboutComponent {
  totalYears: number = 0;
  quotes: any[] = [];

  constructor(public dialogRef: MatDialogRef<AboutComponent>,@Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.quotes = data;
  }

  ngOnInit(): void {
    this.calculateTotalYears(new Date(2021, 11, 6));
  }

  calculateTotalYears(startDate: Date): void {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const years = timeDiff / (1000 * 3600 * 24 * 365.25);

    this.totalYears = Math.round(years * 10) / 10;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
