import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceDetails: any[] = [];

  constructor(public dialogRef: MatDialogRef<ExperienceComponent>,@Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.experienceDetails = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
} 