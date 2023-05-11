import { baseUrl } from './constants';
import axios from 'axios';
import {
    CategoriesType,
    clubDataType,
    productDataType,
} from './types';

export default class Api {
    private readonly _baseUrl: string;

    constructor() {
        this._baseUrl = baseUrl;
    }

    getPersonInfo(personId: string | undefined) {
        return axios.get(`${this._baseUrl}persons/${personId}`);
    }

    getItems() {
        return axios.get<productDataType[]>(`${this._baseUrl}items`);
    }

    getCategories() {
        return axios.get<CategoriesType[]>(`${this._baseUrl}categories`);
    }

    getCategory(categoryId: string) {
        return axios.get<CategoriesType[]>(
            `${this._baseUrl}categories/${categoryId}`
        );
    }

    getClubInfo(clubId: string | undefined) {
        return axios.get<clubDataType>(`${this._baseUrl}clubs/${clubId}`);
    }

    getRecommendedItems(category: any, subcategory: any) {
        return axios.get<productDataType[]>(`${this._baseUrl}items`, {
            params: {
                category: category,
                subcategory: subcategory,
            },
        });
    }

    getItem(itemId: string | undefined) {
        return axios.get<productDataType>(`${this._baseUrl}item/${itemId}`);
    }

    // TODO: Пока такого роута нет

    // getRecommendedPeople(category: any, subcategory: any) {
    //     return axios.get<productDataType[]>(`${this._baseUrl}people`, {
    //         params: {
    //             category: category,
    //             subcategory: subcategory,
    //         },
    //     });
    // }
}
