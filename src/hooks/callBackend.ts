import { BASE_URL } from "../config/Config";
//import WebApp from '@twa-dev/sdk';
import axios from "axios";

export const fetchDataFromApi = async (url: string, params: object) => {
  let obj = {
    ...params,
    //["tg_data"]: WebApp.initData
    ["tg_data"]: "query_id=AAHzkV41AAAAAPORXjVFgUVS&user=%7B%22id%22%3A895390195%2C%22first_name%22%3A%22Cuong%22%2C%22last_name%22%3A%22Duong%20Manh%22%2C%22username%22%3A%22cuongdm172%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721358761&hash=9a4574f93ec9abfa9c5b336511f720d47711af2f7bd971bd5b542f01d11e8e20"
  };
  try {
    const { data } = await axios.get(BASE_URL + url, { data: obj });
    return data;
  } catch (error) {
    return error;
  }
};

export const postDataToApi = async (url: string, params: object) => {
  let obj = {
    ...params,
    //["tg_data"]: WebApp.initData
    ["tg_data"]: "query_id=AAHzkV41AAAAAPORXjVFgUVS&user=%7B%22id%22%3A895390195%2C%22first_name%22%3A%22Cuong%22%2C%22last_name%22%3A%22Duong%20Manh%22%2C%22username%22%3A%22cuongdm172%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721358761&hash=9a4574f93ec9abfa9c5b336511f720d47711af2f7bd971bd5b542f01d11e8e20"
  };
  try {
    const { data } = await axios.post(BASE_URL + url, { data: obj });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
