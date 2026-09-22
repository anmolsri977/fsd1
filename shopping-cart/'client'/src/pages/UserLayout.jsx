import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function UserLayout({ cart }) {
	const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

	return (
		<div className="user-layout">
			<Navbar cartCount={cartCount} />
			<main className="page-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default UserLayout
