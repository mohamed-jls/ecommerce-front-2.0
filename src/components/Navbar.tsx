import { Link } from 'react-router-dom'
import useAuth from '../utils/useAuth'

const Navbar = () => {

    const { authInfo, logout } = useAuth()

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img className='logo' src="https://www.freeiconspng.com/thumbs/logo-design/circle-logo-brand-design-png-transparent-image-19.png" alt="" />
                <Link to='/products'><i className="fa-solid fa-bag-shopping"></i>   Products</Link>
                {authInfo && <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i>   Cart</Link>}
                {authInfo?.isAdmin && <Link to='/admin'><i className="fa-solid fa-user-secret"></i>   Admin</Link>}
            </div>
            <div className='navbar-right'>
                {authInfo ? (
                    <a className='logout-nav' onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i>  logout</a>
                ): (
                    <div className='login-nav'>
                        <Link to='/login'><i className="fa-solid fa-arrow-right-to-bracket"></i>  login</Link>
                        <Link to='/signup'><i className="fa-solid fa-user-plus"></i>  signup</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar