import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class SkillsComponent {
  skillsDetails: any[] = [];

  constructor(public dialogRef: MatDialogRef<SkillsComponent>,@Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.skillsDetails = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
} 