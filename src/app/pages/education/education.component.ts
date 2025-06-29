import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class EducationComponent {
  educationDetails: any[] = [];

  constructor(public dialogRef: MatDialogRef<EducationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.educationDetails = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
} 