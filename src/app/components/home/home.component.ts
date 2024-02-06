import { ProjectsService } from './../../_Service/projects.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_model/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProject={} as Project;

  constructor(private titleService:Title ,private projectService:ProjectsService){
    this.titleService.setTitle('Aman yadav-Home')
  }
  ngOnInit():void{
    this.featuredProject=this.projectService.GetProjectById(4);
  }

}
