function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>Title: {product.title}</h3>
      <p>Price: ₹{product.price}/-</p>
      <button onClick={() => addToCart(product.id)}>Add to cart</button>
    </div>
  )
}

export default Product
