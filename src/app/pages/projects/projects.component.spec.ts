import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { DataServiceService } from '../../services/data-service.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let dataService: DataServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      providers: [ DataServiceService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load project data from service', () => {
    const mockProjects = [
      {
        ProjectType: 'Web Development',
        ProjecDetails: {
          Year: '2023',
          For: 'Personal',
          ProjectName: 'Test Project',
          Description: 'Test Description',
          ProjectSkills: ['Angular', 'TypeScript', 'HTML', 'CSS']
        },
        ProjectImage: 'test.jpg'
      }
    ];
    spyOn(dataService, 'getProjectDetails').and.returnValue(mockProjects);
    component.projectDetails = dataService.getProjectDetails();
    expect(component.projectDetails).toEqual(mockProjects);
  });
}); 