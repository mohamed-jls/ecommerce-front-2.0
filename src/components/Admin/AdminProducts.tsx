import { useEffect, useState } from "react"
import { ProductType } from "../../types/productTypes"
import { deleteProduct, getProducts } from "../../api/product"
import ProductForm from "./ProductForm"

const AdminProducts = () => {
    const [products, setProducts] = useState<ProductType[]>()
    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleDelete = async (id:string | undefined) => {
        if(!id) return
        await deleteProduct(id)
        setProducts(products?.filter((product:ProductType) => product._id !== id))
    }

    return (
        <div className="admin-products">
            <div className="admin-product-list">
                {products?.map((product: ProductType) => (
                    <div key={product._id} className="admin-product-item">
                        <img src={product.imageUrl} alt="" />
                        <div className="desc">
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <p className="cat-tag">{product.category}</p>
                            <button className="delete-prod" onClick={()=>handleDelete(product._id)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                ))}
            </div>
            <ProductForm products={products} setProducts={setProducts} />
        </div>
    )
}

export default AdminProducts