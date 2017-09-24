export class Project {
	public name: string;
	public id: string;
	public description: string[];
	public imagePath: string;
	public projectUrl: string;
	public logoPath: string;
	public showLogo: string;

	constructor(name: string, id: string, logo: string, description: string[], imagePath: string, projectUrl: string) {
		this.name = name;
		this.id = id;
		this.logoPath = logo;
		this.description = description;
		this.imagePath = imagePath;
		this.projectUrl = projectUrl;
		this.showLogo = logo === "" ? "hide" : "show";
		console.log(logo === "");
	}
}