import { UserLoginType as UserLogin } from "../types/userTypes";
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export async function login(userLogin: UserLogin){
    const res = await axios.post(`${apiUrl}/auth/login`, userLogin);
    return res.data;
}