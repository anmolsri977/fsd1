import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './pages/UserLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import SimplePage from './pages/SimplePage'

const PRODUCTS_URL = 'https://dummyjson.com/products?limit=12'

function App() {
	const [products, setProducts] = useState([])
	const [cart, setCart] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		fetch(PRODUCTS_URL)
			.then((response) => {
				if (!response.ok) throw new Error('Could not load products')
				return response.json()
			})
			.then((data) => setProducts(data.products))
			.catch(() => setError('Could not load products.'))
			.finally(() => setLoading(false))
	}, [])

	function addToCart(productId) {
		setCart((currentCart) => {
			return { ...currentCart, [productId]: (currentCart[productId] || 0) + 1 }
		})
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<UserLayout cart={cart} />}>
					<Route index element={<Home products={products}addToCart={addToCart} />} />
					<Route path="cart" element={<Cart products={products} cart={cart} />} />
					<Route path="orders" element={<SimplePage title="My Order" />} />
					<Route path="settings" element={<SimplePage title="Settings" />} />
					<Route path="profile" element={<SimplePage title="My Profile" />} />
					<Route path="logout" element={<SimplePage title="Logout" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
