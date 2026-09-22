import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <header>
      <div className="site-title">My Shopping App</div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">My Cart ({cartCount})</Link>
        <Link to="/orders">My Order</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">MyProfile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  )
}

export default Navbar
