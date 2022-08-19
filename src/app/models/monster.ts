export interface Monster {
    name:                   string;
    size:                   string;
    type:                   string;
    subtype:                string;
    group:                  string;
    alignment:              string;
    armor_class:            number;
    armor_desc:             string;
    hit_points:             number;
    hit_dice:               string;
    strength:               number;
    dexterity:              number;
    constitution:           number;
    intelligence:           number;
    wisdom:                 number;
    charisma:               number;
    speed:                  any;
    perception:             number;
    skills:                 any;
    damage_vulnerabilities: string;
    damage_resistances:     string;
    damage_immunities:      string;
    condition_immunities:   string;
    senses:                 string;
    languages:              string;
    challenge_rating:       string;
    actions:                Action[];
    reactions:              string;
    legendary_desc:         string;
    legendary_actions:      string;
    special_abilities:      any[];
    spell_list:             any[];
    img_main:               string;
    document__slug:         string;
    document__title:        string;
    document__license_url:  string;
}

export interface Action {
    name:          string;
    desc:          string;
    attack_bonus?: number;
    damage_dice?:  string;
}
