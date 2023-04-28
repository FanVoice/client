import testPhoto from '../assets/authlets.png';
import testClubLogo from '../assets/clubs/RubinLogo2019.svg';
import testProduct from '../assets/test-product.png';
import { clubDataType } from './types';

export const personDataArray = [
    {
        id: 1,
        name: 'Спортсмен',
        type: 'authlet',
        birthday: '15.02.1990',
        bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quibusdam laudantium hic, consequuntur nobis libero asperiores tempora iste inventore magni labore, alias aspernatur quia dolore cum consequatur quidem. Praesentium, enim?',
        club_id: 2,
        club_name: 'Зенит',
        photo: testPhoto,
        sport_type: 2,
        sport_type_name: 'Футбол',
    },
    {
        id: 2,
        name: 'Спортсмен2',
        type: 'authlet',
        birthday: '15.02.1990',
        bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quibusdam laudantium hic, consequuntur nobis libero asperiores tempora iste inventore magni labore, alias aspernatur quia dolore cum consequatur quidem. Praesentium, enim?',
        club_id: 2,
        club_name: 'Зенит2',
        photo: testPhoto,
        sport_type: 2,
        sport_type_name: 'Футбол',
    },
];

export const personDataSingle = {
    id: 1,
    name: 'Спортсмен2',
    type: 'authlet',
    birthday: '15.02.1990',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quibusdam laudantium hic, consequuntur nobis libero asperiores tempora iste inventore magni labore, alias aspernatur quia dolore cum consequatur quidem. Praesentium, enim?',
    club_id: 2,
    club_name: 'Зенит2',
    photo: testPhoto,
    sport_type: 2,
    sport_type_name: 'Футбол',
};

export const clubDataArray: clubDataType[] = [
    {
        id: 1,
        club_name: 'Название клуба',
        sport_type: 'Футбол',
        founding_date: '01.01.1990',
        logo: testClubLogo,
        description:
            'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
    },
    {
        id: 1,
        club_name: 'Название клуба',
        sport_type: 'Футбол',
        founding_date: '01.01.1990',
        logo: testClubLogo,
        description:
            'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
    },
    {
        id: 1,
        club_name: 'Название клуба',
        sport_type: 'Футбол',
        founding_date: '01.01.1990',
        logo: testClubLogo,
        description:
            'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
    },
    {
        id: 1,
        club_name: 'Название клуба',
        sport_type: 'Футбол',
        founding_date: '01.01.1990',
        logo: testClubLogo,
        description:
            'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
    },
];
export const clubData: clubDataType = {
    id: 1,
    club_name: 'Название клуба',
    sport_type: 'Футбол',
    founding_date: '01.01.1990',
    logo: testClubLogo,
    description:
        'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
};

export const productData = {
    id: 1,
    name: 'Тест продукт',
    description:
        'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
    price: 1000,
    amount: 20,
    event: false,
    event_type: null,
    sport_type: 2,
    person_id: null,
    club_id: 1,
    tags: null,
    photo: testPhoto,
};

export const productDataArray = [
    {
        id: 1,
        name: 'Тест продукт',
        description:
            'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
        price: 1000,
        amount: 20,
        event: false,
        event_type: null,
        sport_type: 2,
        person_id: null,
        club_id: 1,
        tags: null,
        photo: testProduct,
    },
    {
        id: 1,
        name: 'Тест продукт',
        description:
            'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud',
        price: 1000,
        amount: 20,
        event: false,
        event_type: null,
        sport_type: 2,
        person_id: null,
        club_id: 1,
        tags: null,
        photo: testProduct,
    },
];
