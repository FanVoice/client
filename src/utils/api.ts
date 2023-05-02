import { baseUrl } from './constants';
import axios from 'axios';
import { personDataType } from './types';

export default class Api {
    private readonly _baseUrl: string;

    constructor() {
        this._baseUrl = baseUrl;
    }

    getCategories() {
        return axios
            .get(`${this._baseUrl}categories`)
            .catch((err) => console.log(err));
    }

    getPersonInfo() {
        return axios
            .get<personDataType>(`${this._baseUrl}person/1`)
            .catch((err) => console.log(err));
    }
}
