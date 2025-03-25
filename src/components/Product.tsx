import { addProduct } from "../api/cart"
import { useCartContext } from "../context/CartContext"
import { ProductType } from "../types/productTypes"
import { Link } from "react-router-dom"


const Product = ({ product }: { product: ProductType }) => {

    const [cart, setCart] = useCartContext()

    const handleAddToCart = async () => {
        if (!product._id) return
        const res = await addProduct(cart._id, product._id)
        setCart(res)
    }

    return (
        <div className="product-item">
            <Link to={`/product/${product._id}`}>
                <img src={product.imageUrl} alt="poster" />
                <div className="desc">
                    <p>{product.name}</p>
                    <p>$ {product.price}</p>
                    <p>{product.description}</p>
                    <p className="cat-tag">{product.category}</p>
                </div>
            </Link>
            <button className="add-to-cart" onClick={handleAddToCart}><i className="fa-solid fa-circle-plus"></i>     Add to cart</button>

        </div>
    )
}

export default Product