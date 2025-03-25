import { ProductType } from "../types/productTypes"
import { useEffect, useState } from "react"
import Product from "../components/Product"
import { getProducts } from "../api/product"
import Sidebar from "../components/Sidebar"
import { Category } from "../types/categories"


const Products = () => {

    const [category, setCategory] = useState<Category>(Category.ALL)

    const [products, setProducts] = useState<ProductType[]>([])
    const [filtredProducts, setfiltredProducts] = useState<ProductType[]>([])
    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data)
            setfiltredProducts(data)
        }
        fetchProducts()
    }, [])

    useEffect(()=>{
        category == Category.ALL ? setfiltredProducts(products)
        : setfiltredProducts(products.filter((prod) => prod.category == category))
    },[category])

    return (
        <div className="products-page">
            <Sidebar category={category} setCategory={setCategory}/>
            <div className="product-grid">
                {filtredProducts.map((product: ProductType) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products