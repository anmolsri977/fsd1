import Product from '../components/product'
function Home({ products, loading, error, addToCart }) {
	return (
		<section>
			<div className="product-area">
				<div className="products">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))}
				</div>
			</div>
		</section>
	)
}

export default Home
