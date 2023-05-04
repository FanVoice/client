export type peopleProps = {
    type: 'athlete' | 'blogger';
};

export type personDataType = {
    id: number;
    name: string;
    type: 'athlete' | 'blogger';
    birthday: string | null;
    bio: string;
    club_id: number;
    club_name: string;
    photo?: string;
    sport_type: number;
    sport_type_name: string;
};

export type clubDataType = {
    id: number;
    club_name: string;
    sport_type: string;
    founding_date: string;
    description: string;
    logo: string;
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
    club_id: number | null;
    tags: string | null;
    photo: string;
};

export type CategoriesType = {
    id: string;
    name: string;
    photo: string;
};

export type SportsType = {
    id: string;
    name: string;
    photo: string;
};

export type ClubsType = {
    id: string;
    name: string;
    photo: string;
};

export type PeopleType = {
    id: string;
    name: string;
    photo: string;
};
