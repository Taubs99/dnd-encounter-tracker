import { Base } from "./base";

export class Hero implements Base{
    // Generic properties
    name: string;
    url?: string;

    // Health Properties
    currentHealth: number;
    maxHealth: number;
    tempHealth: number;

    // AC/Initiative
    armourClass: number;
    initiative?: number;

    constructor (
        name: string,
        maxHealth: number,
        armourClass: number,
        // Nullable constructors
        url?: string,
        currentHealth?: number,
        initiative?: number,
        tempHealth: number = 0
    ){
        // Set our mandatory values
        this.name = name;
        this.maxHealth = maxHealth;
        this.armourClass = armourClass;

        // For our health - current should be max if not set
        this.currentHealth = currentHealth ?? maxHealth;

        // Initiative should be undefined if not set
        this.initiative = initiative;
        // Same with URL
        this.url = url;

        // We can set our temp health to whatever our value is
        this.tempHealth = tempHealth;
    }
}
