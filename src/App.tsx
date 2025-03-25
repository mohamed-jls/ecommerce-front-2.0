import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Products from './pages/Products'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router'
import CartContextProvider from './context/CartContext'
import ProductDetails from './pages/ProductDetails'
import Admin from './pages/Admin'

function App() {


    return (
        <div className='app'>
            <Navbar />
            <CartContextProvider>
                <Routes>
                    <Route index element={<h1>Home</h1>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/admin/*' element={<Admin />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                </Routes>
            </CartContextProvider>

        </div>
    )
}

export default App
