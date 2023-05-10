export type peopleProps = {
    type: 'athlete' | 'blogger';
};

export type personDataType = {
    id: number;
    name: string;
    birthday?: string | null;
    bio?: string;
    club_id?: number;
    club_name?: string;
    photo: string;
    sport_type?: number;
    sport_type_name?: string;
};

export type clubDataType = {
    id: number;
    name: string;
    sport_type_name?: string;
    founding_date?: string;
    description?: string;
    photo: string;
};

export type productDataType = {
    id: number;
    name: string;
    description: string;
    price: number;
    amount: number;
    event: boolean;
    event_type: string | null;
    sport_type: number | null;
    person_id: number | null;
    club_id: string;
    tags: string | null;
    photo: string;
};

export type CategoriesType = {
    id: string | number;
    name: string;
    photo: string;
};