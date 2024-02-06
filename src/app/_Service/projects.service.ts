import { Injectable } from '@angular/core';
import { Project } from '../_model/project';
import { Tag } from '../_model/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Password Generator", pictures: ["assets/pwg/1.png","assets/pwg/2.png","assets/pwg/1.png"], projectLink: "https://github.com/Aman243y/Angular-PWG-", summary: " providing a secure and convenient tool for generating strong passwords.", description: "a simple password generator that allows users to customize the length and composition of their passwords. Users can specify the desired password length and choose whether to include uppercase letters, lowercase letters, numbers, and special characters.", tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.BOOTSTRAP,Tag.HTML,Tag.CSS]},
    {id: 1, name: "Typing Master", pictures: ["assets/type/1.png","assets/type/2.png","assets/type/1.png"], projectLink: "https://github.com/Aman243y/Angular-projects", summary: " Serves as a practical tool for users looking to enhance their typing skills . ", description: "This project is a typing master application designed to help users improve their typing skills by generating random sentences for practice. Users can engage in typing exercises with sentences of varying lengths and complexity, enhancing both speed and accuracy in typing.",tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.BOOTSTRAP,Tag.HTML,Tag.CSS]},
    {id: 2, name: "WikkiSearch(Web API Project)", pictures: ["assets/wikki/1.png","assets/wikki/2.png","assets/wikki/3.png"], projectLink: "https://github.com/Aman243y/wikki", summary: " Serves as an efficient tool for users to explore Wikipedia content in a responsive and user-friendly manner", description: "The WikiSearch project is a web application built using Angular that utilizes the Wikipedia API for seamless and dynamic searching of Wikipedia articles. Users can input search queries, and the application retrieves and displays relevant Wikipedia entries, offering a streamlined and user-friendly way to explore information.", tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.BOOTSTRAP,Tag.HTML,Tag.CSS]},
    {id: 3, name: "MeriBook(Web API Project)", pictures: ["assets/book/1.png","assets/book/2.png","assets/book/1.png"], projectLink: "https://github.com/Aman243y/Google-Book", summary: "Web API Project that was developed for a class project.", description: "MeriBook is designed as a user-friendly book exploration platform where users can search for books using the Google Books API. The application displays comprehensive details about each book, including title, author, description, and cover image. Users can easily navigate through search results, view book details, and make informed decisions about their reading choices. ",tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.BOOTSTRAP,Tag.HTML,Tag.CSS]},
    {id: 4, name: "Routing In Angular", pictures: ["assets/routing/1.png","assets/routing/2.png","assets/routing/1.png"], projectLink: "https://github.com/Aman243y/projects/tree/project", summary: " serves as a showcase of diverse skills and achievements within a single, navigable web application.", description: "This Angular-based portfolio project serves as a centralized platform for showcasing and navigating through various small projects, including a password generator, typing master,Table,MeriBook and WikiSearch. The project features a navigation bar with routing capabilities, allowing users to seamlessly explore and access each individual project.", tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.BOOTSTRAP,Tag.HTML,Tag.CSS,Tag.Tailwind]},
    {id: 5, name: "Employee Mnagement(RestAPI Project)", pictures: ["assets/emp/1.png","assets/emp/2.png","assets/emp/3.png"], projectLink: "https://github.com/Aman243y/Employee-Management", summary: " Integrates Spring Boot for the backend, MySQL as the database, and Angular for the frontend.", description: "The Employee Management System is a full-stack project that employs Spring Boot as the backend framework, MySQL as the database, and Angular for the frontend. The system enables users to perform CRUD (Create, Read, Update, Delete) operations on employee data..", tags: [Tag.ANGULAR,Tag.TYPESCRIPT,Tag.BOOTSTRAP,Tag.HTML,Tag.CSS,Tag.MYSQL,Tag.RESTAPI,Tag.JAVA,Tag.SPRINGBOOT]},
    {id: 6, name: "SpringBoot- LazyLoading ", pictures: ["assets/lazy/1.png","assets/lazy/2.png","assets/lazy/1.png"], projectLink: "https://github.com/Aman243y/SpringBoot", summary: "optimization technique that defers the loading of certain components or resources until they are specifically requested.", description: " lazy loading involves delaying the initialization of specific components or beans until they are actually needed during runtime. This approach can improve application startup performance by avoiding the unnecessary loading of resources that might not be used immediately.", tags: [Tag.JAVA,Tag.SPRINGBOOT,]},
    {id: 7, name: "SpringBoot- Configuration", pictures: ["assets/config/1.png","assets/config/2.png","assets/config/3.png"], projectLink: "https://github.com/Aman243y/Spring-boot-configuration", summary: "Configuration simplifies application setup by providing a convention-over-configuration approach.", description: "This approach enhances readability, maintainability, and flexibility, enabling efficient management of application properties without the need for explicit configuration..", tags: [Tag.JAVA,Tag.SPRINGBOOT,]},
    {id: 8, name: "SpringBoot- RestApi", pictures: ["assets/rest/1.png","assets/rest/2.png","assets/rest/3.png"], projectLink: "https://github.com/Aman243y/Spring-Boot--restApi/tree/rest", summary: "simplifies the development of robust and scalable RESTful web services .", description: "Spring Boot's REST API capabilities facilitate the creation of RESTful web services with a focus on simplicity and productivity. Developers can easily define endpoints, handle HTTP methods, and manage data resources using annotations and conventions, streamlining the process of building scalable and maintainable REST APIs. The framework's built-in features, such as automatic serialization/deserialization and error handling, contribute to efficient API development.", tags: [Tag.JAVA,Tag.SPRINGBOOT,Tag.RESTAPI]},
    {id: 9, name: "Student Tracker(Pure Java)", pictures: ["assets/StudentTrack/1.1.png","assets/StudentTrack/1.2.png","assets/StudentTrack/1.3.png"], projectLink: "https://github.com/Aman243y/Student-Tracker", summary: " allowing users to manage and track students' information, including name, lastname, email, and student ID.", description: "The Student Tracker application is designed to efficiently manage student data by leveraging Java for the backend logic and MySQL as the database in the Eclipse IDE. It allows users to input and store essential student details such as name, lastname, email, and student ID. The application includes functionalities for adding, updating, and deleting student records, providing a user-friendly interface for tracking and organizing student information effectively. This project showcases the integration of Java and MySQL for a practical data management application in an educational context.", tags: [Tag.JAVA,Tag.MYSQL,Tag.JDBC]},
    {id: 10, name: "Student Registration(web App Java)", pictures: ["assets/Studebt regi/1.png","assets/Studebt regi/2.png"], projectLink: "https://github.com/Aman243y/Student-Registration", summary: " Java application that facilitates the registration process by providing a user-friendly form to capture essential student details.", description: " this Student Registration Form application simplifies the student registration process. Leveraging Java for the backend logic, the application offers an intuitive user interface for entering and submitting student information, including name, address, contact details, and course preferences. The data is efficiently stored in a backend database for future reference", tags: [Tag.JAVA,Tag.MYSQL,Tag.JDBC]},
    {id: 11, name: "Java Fundamentals", pictures: ["assets/java essen/1.png","assets/java essen/2.png","assets/java essen/3.png"], projectLink: "https://github.com/Aman243y/Java-All", summary: "Java's fundamentals have played a pivotal role in shaping the software development landscape. ", description: "Object-Oriented Programming (OOP):,Java is a versatile, object-oriented, and high-performance programming language. Its fundamentals form the backbone of many enterprise-level applications, mobile apps (Android), and web applications. Key aspects include platform independence, strong type system, automatic memory management, and a rich set of APIs and libraries.", tags: [Tag.JAVA]},
    {id: 11, name: "Mock Interview Platform(TY PROJECT)", pictures: ["assets/ty/1.png","assets/ty/2.png","assets/ty/1.png"], projectLink: "https://github.com/Aman243y/Ty-project", summary: "Interview platform", description: "A mock interview is an excellent approach to prepare for a real job interview. It offers you an idea of what you need to do and establishes your goals. You should practice so that you can see where you can improve. You'll be well-prepared for the real job interview by the time it arrives.", tags: [Tag.JAVA,Tag.MYSQL,Tag.HTML,Tag.CSS,Tag.NODEJS,Tag.REACT]}

  ];

  constructor() { }

  GetProducts() {
    return this.projects;
  }

  GetProjectById(id:number): Project{
    let project =this.projects.find(project =>project.id===id);

    if(project===undefined) {
      throw new TypeError('there is no project that matches the id:' +id)
    }

    return project;
  }

  GetProjectByFilter(filterTags:Tag[]){
    let filteredProjects:Project[]=[];

    this.projects.forEach(function (project){
      let foundAll=true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }
      });
        if(foundAll){
          filteredProjects.push(project);
        }
    });
    return filteredProjects;

  }
}
