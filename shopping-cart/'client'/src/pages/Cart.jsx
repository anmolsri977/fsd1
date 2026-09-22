function Cart({ products, cart }) {
	const cartProducts = products.filter((product) => cart[product.id])

	return (
		<section>
			<h1>Cart</h1>
			
			{cartProducts.map((product) => (
				<div className="cart-row" key={product.id}>
					<img src={product.thumbnail} alt={product.title} />
					<p>{product.title}</p>
					<p>${product.price} x {cart[product.id]}</p>
				</div>
			))}
		</section>
	)
}

export default Cart
