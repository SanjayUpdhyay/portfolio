import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectDetails: any[] = [];

  constructor(public dialogRef: MatDialogRef<ProjectsComponent>,@Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.projectDetails = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onImageError(event: any): void {
    event.target.src = 'assets/logos/project-icon.png';
  }
} 