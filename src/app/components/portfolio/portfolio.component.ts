import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/_Service/projects.service';
import { Tag } from 'src/app/_model/Tag';
import { Project } from 'src/app/_model/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean =true;
  typescript: boolean=false;
  angular : boolean=false;
  css : boolean=false;
  html : boolean=false;
  bootstrap : boolean=false;
  java : boolean=false;
  nodejs : boolean=false;
  mysql : boolean=false;
  react : boolean=false;
  tailwind : boolean=false;
  restapi : boolean=false;
  springboot: boolean=false;
  jdbc: boolean=false;


  filtering :Boolean=false;


  constructor(private titleService:Title , private projectService:ProjectsService){
    this.titleService.setTitle('Aman yadav-Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProducts();
  }
  Filter(){
    let filterTags: Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.html){
      filterTags.push(Tag.BOOTSTRAP);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if(this.bootstrap){
      filterTags.push(Tag.HTML);
    }
    if(this.mysql){
      filterTags.push(Tag.MYSQL);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }
    if(this.tailwind){
      filterTags.push(Tag.Tailwind);
    }
    if(this.restapi){
      filterTags.push(Tag.RESTAPI);
    }
    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
    }
    if(this.jdbc){
      filterTags.push(Tag.JDBC);
    }



    if(this.angular || this.css || this.html || this.java || this.bootstrap || this.nodejs || this.typescript || this.mysql || this.react || this.tailwind || this.restapi || this.springboot || this.jdbc  ){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }



   this.projects=this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilter(){
    this.angular=false;
    this.css=false;
    this.html=false;
    this.java=false;
    this.typescript=false;
    this.nodejs=false;
    this.bootstrap=false;
    this.mysql=false;
    this.react=false;
    this.tailwind=false;
    this.restapi=false;
    this.springboot=false;
    this.jdbc=false;




    this.filtering=false;

    this.projects=this.projectService.GetProducts();

  }

}
