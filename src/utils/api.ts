import { baseUrl } from './constants';
import axios from 'axios';
import { CategoriesType, SportsType, personDataType } from './types';

export default class Api {
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = baseUrl;
  }

  getPersonInfo() {
    return axios.get<personDataType>(`${this._baseUrl}person/1`)
      .catch((err) => console.log(err));
  }

  getCategories() {
    return axios.get<CategoriesType[]>(`${this._baseUrl}categories`)
      .catch((err) => console.log(err));
  }
  getCategory(categoryId: string) {
    return axios.get<SportsType[]>(`${this._baseUrl}categories/${categoryId}`)
      .catch((err) => console.log(err));
  }

}
