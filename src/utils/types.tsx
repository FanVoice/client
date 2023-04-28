export type peopleProps = {
    type: 'authlet' | 'blogger';
};

export type personDataType = {
    id: number;
    name: string;
    type: string;
    birthday: string | null;
    bio: string;
    club_id: number;
    club_name: string;
    photo: string | undefined;
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
