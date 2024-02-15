import {comment} from "postcss";


export class Collection{
    public image!:string;
    public name!:string;
    public description!:string;
    public count!:number;


    constructor(image: string, name: string, description: string, count: number) {
        this.image = image;
        this.name = name;
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

export class Food{
    public id?:string;
    public name!:string;
    public price!:number;
    public image!:string;
    public rating!:number;
    public description!:string;
    public category?:string;

    constructor(name: string, price: number, image: string, rating: number) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.rating = rating;
    }
}

export class RestaurantDetails{
    public name!:string;
    public locale!:string;
    public specialPack!:string;
    public rating!:number;
    public timing!:string;
    public distance!:number;
    public localisedAddress!:string;
    public image!:string;


    constructor(name: string, locale: string, specialPack: string, rating: number,
                timing: string, distance: number, localisedAddress: string, image: string) {
        this.name = name;
        this.locale = locale;
        this.specialPack = specialPack;
        this.rating = rating;
        this.timing = timing;
        this.distance = distance;
        this.localisedAddress = localisedAddress;
        this.image = image;
    }
}

export class Review{
    public username!:string;
    public rating!:string;
    public text!:string;
    public comment!:string;
    public orderType!:string;
    public votes!:number
    public time!:string;


    constructor(username: string, rating: string, text: string,
                comment: string, orderType: string, votes: number, time:string) {
        this.username = username;
        this.rating = rating;
        this.text = text;
        this.comment = comment;
        this.orderType = orderType;
        this.votes = votes;
        this.time = time;
    }

}
