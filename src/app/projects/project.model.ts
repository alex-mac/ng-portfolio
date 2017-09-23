export class Project {
	public name: string;
	public description: string[];
	public imagePath: string;
	public projectUrl: string;

	constructor(name: string, description: string[], imagePath: string, projectUrl: string) {
		this.name = name;
		this.description = description;
		this.imagePath = imagePath;
		this.projectUrl = projectUrl;
	}
}