import { Party } from "./party";

export class Encounter{
    name: string;
    description?: string;

    // Monsters
    monsters: Array<any> = [];
    // Party
    party?: Party;

    constructor(
        name: string,
        description?: string
    ){
        this.name = name;
        this.description = description;
    }

    public addMonster(monster: any, count: number){
        this.monsters.push(monster);
    }
}