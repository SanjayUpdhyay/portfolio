import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { DataServiceService } from '../../services/data-service.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let dataService: DataServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      providers: [ DataServiceService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load skills data from service', () => {
    const mockSkills = [
      {
        SkillType: 'Frontend',
        SkillName: [
          { Skill: 'Angular', Progress: '90', Icon: 'angular.svg' },
          { Skill: 'React', Progress: '85', Icon: 'react.svg' }
        ]
      }
    ];
    spyOn(dataService, 'getSkill').and.returnValue(mockSkills);
    component.skillsDetails = dataService.getSkill();
    expect(component.skillsDetails).toEqual(mockSkills);
  });
}); 