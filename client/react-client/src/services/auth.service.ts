import { API_HOST } from './../environment';
import { LoginDTO, RegisterDTO } from "./../models/auth.model";
import axios from "axios";

export const login = async (credentials: LoginDTO) => {
  try {
    const { data } = await axios.post(`${API_HOST}/auth/login`, credentials);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (credentials:RegisterDTO) => {};
