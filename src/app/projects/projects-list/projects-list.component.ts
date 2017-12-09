import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
	projects: Project[] = [
		new Project(
			"Online Go", 
			"online-go",
			"",
			[
				"When I'm not playing Go, I'm contributing to the open sourced online go server.", 
                "Update the user interface and upgrade the user experience by addressing bugs.", 
                "Actively play using the web portal, keeping my eye out for areas that can improve."
            ], 
			"http://online-go.com"),
		new Project(
			"Joe Coffee", 
			"joe-coffee",
			"assets/joe-coffee-app.png",
			[
				"Developed business logic that shows users nearby coffee shops, sorted from nearest to furthest.", 
                "Developed and quality tested the end-to-end user experience.", 
                "I primarily worked on the front end business logic"
            ], 
			"http://joecoffeeapp.com/")
	];

	constructor() { }

	ngOnInit() {
  	}

  	openProject(url: string) {
  		window.open(url);  			
  	}

}
