import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class ExperienceComponent {
  experienceDetails: any[] = [];

  constructor(public dialogRef: MatDialogRef<ExperienceComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.experienceDetails = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
} 