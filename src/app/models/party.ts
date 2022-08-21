import { Hero } from "./hero";

export class Party extends Array<Hero>{
    name: string;
    description?: string;

    public addToParty(hero: Hero){
        this.push(hero);
    }

    public removeFromParty(hero: Hero){
        // Get the index and remove it
        let index: number = this.indexOf(hero);
        if (index > -1){
            this.splice(index, 1);
        }
    }

    constructor(
        name: string,
        description?: string
        ){
        super()

        this.name = name;
        this.description = description;
    }
}
