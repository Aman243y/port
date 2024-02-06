import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean=false;
  isEducationOpen: boolean=false;
  isSkillsOpen:boolean=false;

  constructor(private titleService:Title,private renderer:Renderer2){
    this.titleService.setTitle('Aman yadav-Resume')
  }

  DownloadFile(){
    const link =this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','assets/Resume (5).pdf');
    link.setAttribute('download','Resume.pdf')
    link.click();
    link.remove();

  }

}