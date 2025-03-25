import { ProductType as Product } from "../types/productTypes";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getProducts(){
    const res = await axios.get(`${apiUrl}/products`);
    return res.data;
}

export async function getProduct(id: string){
    const res = await axios.get(`${apiUrl}/products/${id}`);
    return res.data;
}

export async function createProduct(product : Product){
    const res = await axios.post(`${apiUrl}/products`, product);
    return res.data;
}

export async function updateProduct(id: string, product : Product){
    const res = await axios.put(`${apiUrl}/products/${id}`, product);
    return res.data;
}

export async function deleteProduct(id: string){
    const res = await axios.delete(`${apiUrl}/products/${id}`);
    return res.data;
}