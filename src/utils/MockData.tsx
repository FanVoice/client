import testPhoto from '../assets/athletes.png';
import testProduct from '../assets/test-product.png';
import { CategoriesType } from './types';

export const personDataArray: CategoriesType[] = [
    {
        id: 1,
        name: 'Спортсмен',
        photo: testPhoto,
    },
    {
        id: 2,
        name: 'Спортсмен2',
        photo: testPhoto,

    },
];


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
        id: 2,
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
