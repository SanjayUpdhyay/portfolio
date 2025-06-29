import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { ThemeService } from '../../services/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class LandingComponent implements OnInit {
  aboutDetails: any;
  educationDetails: any;
  experienceDetails: any;
  skillsDetails: any;
  projectDetails: any;
  socialMediaLinks: any[] = [];
  themeMode: string = 'system';
  themeModes = [
    { value: 'light', icon: 'ri-sun-line', label: 'Light' },
    { value: 'dark', icon: 'ri-moon-line', label: 'Dark' },
    { value: 'system', icon: 'ri-computer-line', label: 'System' }
  ];
  popupOpen: boolean = false;
  popupContent: any = null;

  constructor(
    private dataService: DataServiceService,
    private router: Router,
    public themeService: ThemeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.aboutDetails = this.dataService.getQuotes();
    this.educationDetails = this.dataService.getEducationDetails();
    this.experienceDetails = this.dataService.getExperienceDetails();
    this.skillsDetails = this.dataService.getSkill();
    this.projectDetails = this.dataService.getProjectDetails();
    this.socialMediaLinks = this.dataService.getSociamMediaName();
    this.themeMode = localStorage.getItem('theme') || 'system';
  }

  setThemeMode(mode: string) {
    this.themeMode = mode;
    this.themeService.setTheme(mode);
  }

  openPopup(content: any) {
    this.popupContent = content;
    this.popupOpen = true;
  }

  closePopup() {
    this.popupOpen = false;
    this.popupContent = null;
  }

  getFeature() {
    return this.dataService.getFeature();
  }

  navigateToSection(section: string): void {
    this.router.navigate([section]);
  }

  openAboutDialog(): void {
    this.dialog.open(AboutComponent, {
      panelClass: 'centered-mat-dialog',
      hasBackdrop: true,
      disableClose: true,
      data: this.aboutDetails
    });
  }

  openSkillsDialog(): void {
    this.dialog.open(SkillsComponent, {
      panelClass: 'centered-mat-dialog',
      hasBackdrop: true,
      disableClose: true,
      data: this.skillsDetails
    });
  }

  openProjectsDialog(): void {
    this.dialog.open(ProjectsComponent, {
      panelClass: 'centered-mat-dialog',
      hasBackdrop: true,
      disableClose: true,
      data: this.projectDetails
    });
  }

  openExperienceDialog(): void {
    this.dialog.open(ExperienceComponent, {
      panelClass: 'centered-mat-dialog',
      hasBackdrop: true,
      disableClose: true,
      data: this.experienceDetails
    });
  }

  openEducationDialog(): void {
    this.dialog.open(EducationComponent, {
      panelClass: 'centered-mat-dialog',
      hasBackdrop: true,
      disableClose: true,
      data: this.educationDetails
    });
  }

  openLinkedInProfile(): void {
    // Open LinkedIn profile in a new tab
    const linkedInUrl = 'https://linkedin.com/in/sanjayupadhyay08/';
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  }
}
