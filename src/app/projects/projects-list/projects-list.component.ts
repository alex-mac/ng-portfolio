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
			"Joe Coffee", 
			[
				'Developed business logic that shows users nearby coffee shops, sorted from nearest to furthest.', 
                'Developed and quality tested the end-to-end user experience.', 
                'I primarily worked on the front end business logic'
            ], 
			"c", 
			"http://joecoffeeapp.com/"),
		new Project(
			"Farm Bureau", 
			[
				'Programmed the front end as well as the api architecture and integration.', 
                'Regular meetings with client to explain time projections, hurdles, etc.'
            ], 
            "c", 
            "https://scorecard.fb.org/home"),
		new Project(
			"Simms Fishing", 
			[
				'Implemented core templates and front end logic within the Magento 2 framework.', 
            	'Styled components according to client submitted designs.'
			], 
			"c", 
			"https://scorecard.fb.org/home"),
	];

	title: string = "fdfd";
	description: string = "fff";
	url: string = "ddd";

	constructor() { }

	ngOnInit() {
  	}

  	showDetails (title: string, desc: string, url: string) {
  		this.title = title;
  		this.description = desc;
  		this.url = url;
  		this.toggleVisibility("flex");
  	}

  	toggleVisibility (state: string = "none") {
  		document.getElementById("project-details-overlay").style.display = state;
  	}

}
