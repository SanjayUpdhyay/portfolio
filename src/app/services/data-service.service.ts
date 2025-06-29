import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  isMobile: any
  optimizedImage: any

  constructor() {
    this.isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
    this.optimizedImage = this.imageOptimized();
  }

  imageOptimized() {

    if (!this.isMobile) {
      return [{ profilePhoto: ["assets/Images/MainPhoto1.jpg", "assets/Images/MainPhoto2.jpg", "assets/Images/MainPhoto3.jpg"] },
      {
        projectPhoto: {
          Infosys1: ["assets/Images/InfosysProject/1.jpg", "assets/Images/InfosysProject/2.jpg"],
          Infosys2: ["assets/Images/InfosysProject1/1.jpg", "assets/Images/InfosysProject1/2.jpg"],
          Infosys3: ["assets/Images/InfosysProject2/1.jpg", "assets/Images/InfosysProject2/2.jpg", "assets/Images/InfosysProject2/3.jpg"],
          Event: ["assets/Images/SupraProject/1.jpg", "assets/Images/SupraProject/2.jpg", "assets/Images/SupraProject/3.jpg", "assets/Images/SupraProject/4.jpg", "assets/Images/SupraProject/5.jpg"],
        }
      },

      ]

    }
    else {
      return [{ profilePhoto: ["assets/Images/MainPhoto1.jpg", "assets/Images/MainPhoto2.jpg", "assets/Images/MainPhoto3.jpg"] },
      {
        projectPhoto: {
          Infosys1: ["assets/Images/InfosysProject/MobilePhoto/1.jpg", "assets/Images/InfosysProject/MobilePhoto/2.jpg"],
          Infosys2: ["assets/Images/InfosysProject1/MobilePhoto/1.jpg", "assets/Images/InfosysProject1/MobilePhoto/2.jpg"],
          Infosys3: ["assets/Images/InfosysProject2/MobilePhoto/1.jpg", "assets/Images/InfosysProject2/MobilePhoto/2.jpg", "assets/Images/InfosysProject2/MobilePhoto/3.jpg"],
          Event: ["assets/Images/SupraProject/MobilePhoto/1.jpg", "assets/Images/SupraProject/MobilePhoto/2.jpg", "assets/Images/SupraProject/MobilePhoto/3.jpg", "assets/Images/SupraProject/MobilePhoto/4.jpg", "assets/Images/SupraProject/MobilePhoto/5.jpg"],
        }
      },

      ]

    }
  }

  getNavigationbarData() {
    return [
      { id: "#About", Name: "About" },
      { id: "#Education", Name: "Education" },
      { id: "#Experience", Name: "Experience" },
      { id: "#Skills", Name: "Skill" },
      { id: "#Projects", Name: "Project" },
    ]
  }

  getSociamMediaName() {
    return [{ Name: "linkedin", link: "https://linkedin.com/in/sanjayupadhyay08/" },
    { Name: "leetcode", link: "https://leetcode.com/Upadhyay_Sanjay/" },
    { Name: "Github", link: "https://github.com/SanjayUpdhyay" }
    ]
  }

  getBackgroundImage() {
    return this.optimizedImage[0].profilePhoto
  }

  getUserName() {
    return "Sanjay Prasad Upadhyay"
  }

  getQuotes() {
    const startDate = new Date('2021-12-01');
    const today = new Date();
    today.setMonth(today.getMonth() - 1); // Subtract 1 month
    const diffYears = (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    const years = diffYears.toFixed(1);

    return [{ Quote: "Do What You Love" },
    { About: "specializing in frontend and backend web development. With " + years + " years of experience, I am dedicated to continuous learning and staying updated with emerging technologies. " }
    ]
  }

  getFeature() {
    return [
      { Name: "backend ", Count: "02" },
      { Name: "development", Count: "01" },
      { Name: "frontend", Count: "03" }
    ]
  }

  getEducationDetails() {
    return [
      {
        Year: "Aug 2018 - Aug 2021",
        Name: "Ajay Kumar Garg Engineering College",
        CourseName: "Engineering in Mechanical",
        Logo: "assets/logos/aktu.ac.png",
        Description: "Engaged in a national-level formula car event, crafted a car from scratch, secured 27th position in SUPRA SAE INDIA. Organized technical events, honed practical skills and leadership."
      },
      {
        Year: "Aug 2016 - Aug 2018",
        Name: "D.N. Polytechnic, Meerut",
        CourseName: "Engineering in Mechanical",
        Logo: "assets/logos/bteup.ac.png",
        Description: "Completed diploma in Mechanical Engineering. Worked on a Robotic Arm project, gained hands-on experience in Arduino coding, design, and analysis."
      },
      {
        Year: "Apr 2015 - Mar 2016",
        Name: "P C School, Ghaziabad",
        CourseName: "Intermediate",
        Logo: "assets/logos/cbse.gov.png",
        Description: "Completed intermediate education with a focus on science. Balanced academics and sports, developing teamwork and time management skills."
      },
      {
        Year: "Apr 2013 - Mar 2014",
        Name: "P C School, Ghaziabad",
        CourseName: "High School",
        Logo: "assets/logos/cbse.gov.png",
        Description: "Completed high school, secured 2nd prize in a science exhibition, and actively participated in sports, fostering teamwork and personal growth."
      }
    ]
  }

  getExperienceDetails() {
    return [
      {
        Year: "Dec 2024 - Present",
        Name: "Policybazaar",
        CourseName: "Technical Associate",
        Logo: "assets/logos/policybazaar.png",
        Description: `Upgraded DMS frontend to Angular v19, enhancing performance by 50% and cutting storage by 25%.<br>Redesigned frontend architecture with module segregation and implemented lazy loading, cutting bundle size by 10% and boosting performance by 15%.`
      },
      {
        Year: "July 2024 - Nov 2024",
        Name: "NetConnect Global",
        CourseName: "Full Stack Developer",
        Logo: "assets/logos/netconnectglobal.png",
        Description: `Migrated HIMS applications from Entity Framework Core to Dapper, achieving a 30% performance improvement. Implemented 20+ change requests and fixed 30+ bugs, boosting HIMS performance and adding new features.`
      },
      {
        Year: "Dec 2021 - May 2024",
        Name: "Infosys Limited",
        CourseName: "Senior System Engineer",
        Logo: "assets/logos/infosys.png",
        Description: `Led development of 5+ applications and resolved 70+ bugs, improving MMS and LLC Portals.<br>Delivered 2 portals on time, implemented 50+ changes, enhancing performance, user experience, and features.`
      }
    ];
  }

  getSkill() {
    return [
      { SkillType: "FrontEnd", SkillName: [{ Skill: "Html", Progress: "70", Icon: "assets/Skills/html.png" }, { Skill: "Css", Progress: "60", Icon: "assets/Skills/css.png" }, { Skill: "JavaScript", Progress: "65", Icon: "assets/Skills/js.png" }, { Skill: "TypeScript", Progress: "55", Icon: "assets/Skills/typescript.png" }, { Skill: "Angular", Progress: "60", Icon: "assets/Skills/angular.png" }] },
      { SkillType: "BackEnd", SkillName: [{ Skill: "C#", Progress: "70", Icon: "assets/Skills/CShrap.png" }, { Skill: ".Net", Progress: "65", Icon: "assets/Skills/.net.png" }, { Skill: ".Net Core", Progress: "60", Icon: "assets/Skills/.NetCore.png" }, { Skill: "ADO", Progress: "50", Icon: "assets/Skills/adoNet.png" }, { Skill: "Entity Framework", Progress: "50", Icon: "assets/Skills/EntityFramework.png" }, { Skill: "Sql Server", Progress: "50", Icon: "assets/Skills/sqlserver.png" }] },
      { SkillType: "Others", SkillName: [{ Skill: "Azure Devops", Progress: "40", Icon: "assets/Skills/devops.png" }, { Skill: "RabbitMQ", Progress: "40", Icon: "assets/Skills/rabbitmq.png" }] },
    ]
  }

  getProjectDetails() {
    return [
      { ProjectType: "POLICYBAZAAR", ProjecDetails: { Year: "Dec 2023- Present", For: "Policybazaar", ProjectName: "DMS PORTAL | FULL STACK DEVELOPER", ProjectSkills: ["Angular", "TypeScript", "HTML", "CSS", "JavaScript"], Description: "Led the upgrade of DMS frontend from Angular v12 to v19, resulting in 50% performance boost and 25% storage optimization.<br>Implemented module segregation and lazy loading architecture, reducing bundle size by 10% and improving overall performance by 15%.<br>Collaborated with backend team to optimize API integration and enhance user experience." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys1 },
      { ProjectType: "NETCONNECT", ProjecDetails: { Year: "July 2023- Nov 2023", For: "NetConnect Global", ProjectName: "HIMS PORTAL | FULL STACK DEVELOPER", ProjectSkills: ["C#", ".NET Core", "Dapper", "SQL Server", "Angular"], Description: "Successfully migrated HIMS applications from Entity Framework Core to Dapper ORM, achieving 30% performance improvement.<br>Implemented 20+ change requests and resolved 30+ critical bugs, significantly enhancing system reliability and functionality.<br>Collaborated with cross-functional teams to deliver high-quality solutions within tight deadlines." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys1 },
      { ProjectType: "INFOSYS", ProjecDetails: { Year: "Feb 2023- Current", For: "Infosys Limited", ProjectName: "MMS PORTAL | BACKEND DEVELOPER", ProjectSkills: ["C#", ".NET Core", "RabbitMQ", "Entity FrameWork", "SQL Server"], Description: "As a team member, I contributed to the New Listener API and Auto Fax Send projects. Leveraged .NET Core, RabbitMQ, SQL.<br> Engaged in requirement gathering, design, coding, debugging, bug fixing, docs, and deployment. Ensured smooth non-prod web app operation.<br> Played a role throughout the software development lifecycle, resulting in the successful integration of the API and Fax feature." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys1 },
      { ProjectType: "INFOSYS", ProjecDetails: { Year: "Aug 2022- Jan 2022 (6 Months)", For: "Infosys Limited", ProjectName: "FCT PORTAL | FULL STACK DEVELOPER", ProjectSkills: [".Net", "HTML", "CSS", "JavaScript", "ADO.Net", "SQL Server"], Description: "As a team member, I played a vital role in shaping interactive forms with dual client-side and server-side validations. Employed .Net Framework (v4.8), JavaScript, SQL Server.<br> Contributed throughout the project lifecycle: requirements gathering, solution design, coding, debugging, bug fixing, documentation, and implementation.<br> Managed non-production web app deployments for fellow developers, ensuring a comprehensive and efficient project delivery." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys2 },
      { ProjectType: "INFOSYS", ProjecDetails: { Year: "May 2022- Aug 2022 (4 Months)", For: "Infosys Limited", ProjectName: "MMS PORTAL | BACKEND DEVELOPER", ProjectSkills: [".Net", "HTML", "CSS", "JavaScript", "ADO.Net", "SQL Server"], Description: "As a team member, I played a role in building Email and Fax Sending features with .Net Framework (v4.7.2), JQuery, SQL Server.<br> Explored tech, broadening my skills in requirements, design, bug fixing, docs, and implementation. Gathered requirements, designed solutions, tested, documented, and collaborated with the team for successful execution." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys3 },
      { ProjectType: "EVENT", ProjecDetails: { Year: "Sept 2018- Aug 2019 (11 Months)", For: "SUPRA SAE INDIA", ProjectName: "student formula car", ProjectSkills: ["designing", "planning", "Cost analysis", "Manufacturing"], Description: "In the SUPRA 2019 competition organized by SAE INDIA in collaboration with Maruti Suzuki, our team undertook the design and fabrication of a student formula vehicle. We successfully passed all inspections and completed the endurance run, and securing the 27th rank. <br>My role primarily focused on the Steering and Purchasing departments. I was responsible for designing the steering geometry and steering system components, and gained valuable experience in various aspects of the overall project." }, ProjectImage: this.optimizedImage[1].projectPhoto.Event },
    ]
  }

  getContactDetails() {
    return [
      { ContactName: "E-mail ID", ContactDetails: "Updhyaysanjay@gmail.com" },
      { ContactName: "Current Location", ContactDetails: "Ghaziabad, Uttar Pradesh, India" },
    ]
  }
}