

export class Collection{
    public image!:string;
    public title!:string;
    public description!:string;
    public count!:number;


    constructor(image: string, title: string, description: string, count: number) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.count = count;
    }
}

export class Restaurant{
    public name!:string;
    public rating!:number;
    public votes!:number;
    public image!:string;

    constructor(name: string, rating: number, votes: number, image: string) {
        this.name = name;
        this.rating = rating;
        this.votes = votes;
        this.image = image;
    }
}
