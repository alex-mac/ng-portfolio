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
			"Simms Fishing", 
			"simms-fishing",
			"assets/simms-fishing.png",
			[
				"Implemented core templates and front end logic in Magento 2.", 
            	"Implement client provided designs in Magento 2.",
            	"Update existing functionality in PHP and Magento 1.9",
            	"Fix existing bugs on both the front end and the backend",

			], 
			"https://simmsfishing.com"),
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
			"http://joecoffeeapp.com/"),
		new Project(
			"Farm Bureau", 
			"farm-bureau",
			"",
			[
				"Programmed the front end logic and behavior in AngularJs.",
				"Heavily upgrade proprietary api architecture and integration.",
                "Communicated technical ideas to non-technical clients."
            ], 
            "https://scorecard.fb.org/home"),

	];

	constructor() { }

	ngOnInit() {
  	}

  	openProject(url: string) {
  		window.open(url);  			
  	}

}
