export class Project {
    public name: string;
    public id: string;
    public description: string[];
    public projectUrl: string;
    public logoPath: string;
    public showLogo: string;

    constructor(name: string, id: string, logo: string, description: string[], projectUrl: string) {
        this.name = name;
        this.id = id;
        this.logoPath = logo;
        this.description = description;
        this.projectUrl = projectUrl;
        this.showLogo = logo === '' ? 'hide' : 'show';
        console.log(logo === '');
    }
}
