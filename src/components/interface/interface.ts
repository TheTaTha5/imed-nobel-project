export interface INobel {
    nobelPrizes: NobelPrize[];
    meta:        Meta;
    links:       INobelLink[];
}

export interface INobelLink {
    first: string;
    prev:  string;
    self:  string;
    next:  string;
    last:  string;
}

export interface Meta {
    offset:             number;
    limit:              number;
    nobelPrizeYear:     number;
    yearTo:             number;
    nobelPrizeCategory: string;
    count:              number;
}

export interface NobelPrize {
    awardYear:           number;
    category:            Category;
    categoryFullName:    Category;
    dateAwarded:         Date;
    prizeAmount:         number;
    prizeAmountAdjusted: number;
    topMotivation:       Category;
    laureates:           Laureate[];
}

export interface Category {
    en: string;
    se: string;
    no: string;
}

export interface Laureate {
    id:         number;
    name:       Category;
    portion:    string;
    sortOrder:  string;
    motivation: Category;
    links:      LaureateLink[];
}

export interface LaureateLink {
    rel:    string;
    href:   string;
    action: string;
    types:  string;
}
