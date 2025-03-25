import { Link } from 'react-router'

const AdminSidebar = () => {
  return (
    <div className='admin-sidebar'>
        <Link to='/admin/products'>products</Link>
        <Link to='/admin/users'>users</Link>
    </div>
  )
}

export default AdminSidebar