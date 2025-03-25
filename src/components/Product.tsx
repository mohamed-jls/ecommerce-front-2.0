import { addProduct } from "../api/cart"
import { useCartContext } from "../context/CartContext"
import { ProductType } from "../types/productTypes"


const Product = ({ product }: { product: ProductType }) => {

    const [cart, setCart] = useCartContext()

    const handleAddToCart = async ()=>{
        const res = await addProduct(cart._id, product._id)
        setCart(res)
    }

    return (
        <div className="product-item">
            <img src={product.imageUrl} alt="poster" />
            <div className="desc">
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <button className="add-to-cart" onClick={handleAddToCart}><i className="fa-solid fa-circle-plus"></i>     Add to cart</button>
            </div>

        </div>
    )
}

export default Product