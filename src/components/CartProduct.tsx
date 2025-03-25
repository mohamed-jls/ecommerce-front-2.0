import { useState, useEffect } from "react"
import { ProductType } from "../types/productTypes"
import { getProduct } from "../api/product"
import { useCartContext } from "../context/CartContext"
import { removeProduct, updateQte } from "../api/cart"

const CartProduct = ({ productId, quantity }: { productId: string, quantity: number }) => {

    const [product, setProduct] = useState<ProductType>()

    const [cart, setCart] = useCartContext()

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProduct(productId);
            console.log(data);
            setProduct(data);
        }
        fetchProduct();
    },[])

    const handleRemove = async ()=>{
        const data = await removeProduct(cart._id, productId) 
        setCart(data)
    }

    const handleAddQte = async () => {
        const res = await updateQte(cart._id, productId, quantity + 1);
        setCart(res);
    }

    const handleSubQte = async () => {
        const res = await updateQte(cart._id, productId, quantity - 1);
        setCart(res);
    }

    return (
        <div className="product-item">
            <img src={product?.imageUrl} alt="" />
            <div className="desc">
                <p>{product?.name}</p>
                <p>{product?.price}</p>
                <div className="qte">
                    <button onClick={handleSubQte}><i className="fa-solid fa-minus"></i></button>
                    <p>{quantity}</p>
                    <button onClick={handleAddQte}><i className="fa-solid fa-plus"></i></button>
                </div>
                <button className="remove-prod" onClick={handleRemove}>remove product</button>
            </div>
        </div>
    )
}

export default CartProduct