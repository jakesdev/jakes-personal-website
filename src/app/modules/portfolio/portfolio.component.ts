import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PersonalProject } from './models/PersonalProject';
import { ProfessionalProject } from './models/ProfessionalProject';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  professionalProjects: ProfessionalProject[] = [];
  personalProjects: PersonalProject[] = [];
  modalRef?: BsModalRef;
  professionalProjectDetail: any;
  sideProjectDetail: any;
  constructor(
    private modalService: BsModalService
  ) {
    this.professionalProjects = [
      {
        id: '1',
        projectName: 'HR****',
        description:`Its a professional project when I've worked at Rikkeisoft.`,
        content:``,
        thumbnail: '../../../assets/images/hrm.png'
      },
      {
        id: '2',
        projectName: 'FLM***',
        description:`Its a professional project when i've worked at FPT Software.`,
        content:``,
        thumbnail: '../../../assets/images/flm.png'
      }
    ];
    this.personalProjects = [
      {
        id: '1',
        projectName: 'Facy Attendance',
        description:`Capstone Project using AI to recognize student's face and automatically taking attendance.`,
        content:`
        <h4>What is Automatic Attendance System by Face Recognition</h4>
        <p>Face recognition is a method of identifying or verifying the identity of an individual using their face. Face recognition systems can be used to identify people in photos, video, or in real-time"
        The main idea of our projects is to reduces the manual work of the lectures on taking attendance
        So we decides to making a system to recognition face of student, after that its send the information to server, its collect and give us an report which student are attendance</p>
        <img src="https://user-images.githubusercontent.com/77240091/119213240-db09db00-bae7-11eb-8cae-b6e6e4ce2c09.png" width="100%">
        <p></p>
        <h4>Which technology apply</h4>
        <h6>Face Recognition System</h6>
        <ul>
        <li>Python 3.8.5 or later</li>
        <li>OpenCV 4.4.0 or later</li>
        <li>Keras 2.4.3 or later</li>
        <li>Tensorflow 2.5 or later</li>
        <li>Google Colab</li>
        </ul>
        <h6>Class Management System</h6>
        <ul>
        <li>ReactJS 17.0.1 or later</li>
        <li>NodeJS 4.17.1 or later</li>
        <li>MongoDB 4.4.6 or later</li>
        </ul>
        <h4>Features</h4>
        <ul>
        <li>Face Recognition</li>
        <li>Automatic attendance taking</li>
        <li>Class Management System</li>
        <li>Export Report</li>
        </ul>
    
        <p>Here is the code: <a href="https://github.com/facy-attendance/attendance-system-by-face-recognition" target="_blank">https://github.com/facy-attendance/attendance-system-by-face-recognition</a></p>
        `,
        thumbnail: '../../../assets/images/web-capstone.png',
        githubLink:'https://github.com/facy-attendance/attendance-system-by-face-recognition'
      },
      {
        id: '2',
        projectName: 'TopOne Employment Agency',
        description:`A Landing page to introduce a recruiting company.`,
        content:`
        <p>A Landing page to introduce a recruiting company</p>
        <p>Im using template to making this site</p>
        <img src="../../../assets/images/top-one.png" width="100%">
        <p></p>
        <p>Live : <a href="https://toponeemployment.ca/" target="_blank">https://toponeemployment.ca/</a></p>
        `,
        thumbnail: '../../../assets/images/top-one.png',
        visitLink:'https://toponeemployment.ca/'
      },
      {
        id: '3',
        projectName: 'Bau Cua Tom Ca',
        description:`HTML Basic page I've created for fun when its nearly Tet holiday.`,
        content:`
        <p>Tet is the Vietnamese New Year and is the most important festival and public holiday in Vietnam.</p> 
        <p>There are lots of activities during the festival. Besides, on that day people are a gamble to try their luck. </p>
        <p>So that I'm making this game (just for fun, no real money) to try my luck(maybe xD)</p>
        <img src="../../../assets/images/bau-cua-tom-ca.jpg" width="100%">
        <p>The app is simple, just click on the dice and its will rolling</p>
        <p>Here is the code: <a href="https://baucuatomca.netlify.app/" target="_blank">https://github.com/jakesdev/BauCuaTomCa</a></p>
        <p>Live Demo: <a href="https://baucuatomca.netlify.app/" target="_blank">https://baucuatomca.netlify.app/</a></p>
        `,
        thumbnail: '../../../assets/images/bau-cua-tom-ca.jpg',
        visitLink:'https://baucuatomca.netlify.app/'
      }
    ]
   }

  ngOnInit(): void {
  }

  openModalProfessionalProject(professionalProject: TemplateRef<any>, projectId: string) {
    const config: ModalOptions = { class: 'modal-lg' };
    this.modalRef = this.modalService.show(professionalProject, config);
    this.professionalProjectDetail = this.professionalProjects.find(project => project.id === projectId);
  }

  openModalPersonalProject(sideProject: TemplateRef<any>, projectId: string) {
    const config: ModalOptions = { class: 'modal-lg' };
    this.modalRef = this.modalService.show(sideProject, config);
    this.sideProjectDetail = this.personalProjects.find(project => project.id === projectId);
  }
}
