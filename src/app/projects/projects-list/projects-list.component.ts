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
				'Implemented core templates and front end logic within the Magento 2 framework.', 
            	'Styled components per client submitted designs.'
			], 
			"https://simmsfishing.com"),
		new Project(
			"Farm Bureau", 
			"farm-bureau",
			"",
			[
				'Programmed the front end as well as the api architecture and integration.', 
                'Regular meetings with client to explain time projections, hurdles, etc.'
            ], 
            "https://scorecard.fb.org/home"),
		new Project(
			"Joe Coffee", 
			"joe-coffee",
			"assets/joe-coffee-app.png",
			[
				'Developed business logic that shows users nearby coffee shops, sorted from nearest to furthest.', 
                'Developed and quality tested the end-to-end user experience.', 
                'I primarily worked on the front end business logic'
            ], 
			"http://joecoffeeapp.com/"),
	];

	constructor() { }

	ngOnInit() {
  	}

  	openProject(url: string) {
  		window.open(url);  			
  	}

}
