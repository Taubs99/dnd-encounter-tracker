export class Character {
  currHealth: number;
  maxHealth: number;
  initiative: number;
  name: string;
  link: string;
  type: CharacterType;
}

export class CharacterType {
  value: string;
  viewValue: string;
}