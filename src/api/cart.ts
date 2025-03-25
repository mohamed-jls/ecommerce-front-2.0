import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getCart(userId: string){
    const res = await axios.get(`${apiUrl}/cart/${userId}`);
    return res.data;
}

export async function emptyCart(id: string){
    const res = await axios.put(`${apiUrl}/cart/empty/${id}`);
    return res.data;
}

export async function addProduct (id: string, prodId:string){
    const res = await axios.put(`${apiUrl}/cart/${id}/add-product/${prodId}`);
    return res.data;
}

export async function removeProduct (id: string, prodId:string){
    const res = await axios.put(`${apiUrl}/cart/${id}/remove-product/${prodId}`);
    return res.data;
}

export async function updateQte(id: string, prodId: string, quantity:number){
    const res = await axios.put(`${apiUrl}/cart/${id}/quantity/${prodId}`, {quantity});
    return res.data;
}