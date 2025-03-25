
import { Route, Routes } from "react-router-dom"
import AdminSidebar from "../components/Admin/AdminSidebar"
import AdminProducts from "../components/Admin/AdminProducts"
import Users from "../components/Admin/Users"
import useAuth from "../utils/useAuth"

const Admin = () => {

    const {authInfo} = useAuth()

    if(!authInfo?.isAdmin) return <h1>Not Authorized</h1>

    return (
        <div className="admin-page">
            <AdminSidebar />
            <Routes>
                <Route path='products' element={<AdminProducts />} />
                <Route path='users' element={<Users />} />
            </Routes>
        </div>
    )
}

export default Admin