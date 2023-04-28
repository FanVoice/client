import { baseUrl } from './constants';
import axios from 'axios';
import { personDataType } from './types';

export default class Api {
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = baseUrl;
  }

  getPersonInfo() {
    return axios.get<personDataType>(`${this._baseUrl}person/1`)
      .catch((err) => console.log(err));
  }
}
