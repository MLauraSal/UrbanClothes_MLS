
import products from '../ProductsData';



export default function Shop(addToCart) {

  return (
    <section className="shop">
      <h2 className="title">Shop Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageDefault} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}
