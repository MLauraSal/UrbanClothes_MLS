import "../assets/css/ProductsMinimal.css";
import "../assets/css/Global.css";
import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';

const ProductMinimal = () => {
  const { products } = useProducts();
  const minimalProducts = products.slice(0, 4);
  return (
    <div className="product-minimal">
      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>

        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
          {minimalProducts.map(product => (
              <div className="showcase" key={product.id}>
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <Link to={`/product/${product.id}`}>
                                 <h4 className="showcase-title">{product.title}</h4>
                               </Link>
                  <a href="#" className="showcase-category">{product.category}</a>
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${(product.price * 1.3).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-container">
          {minimalProducts.map(product => (
              <div className="showcase" key={product.id}>
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>
                  <a href="#" className="showcase-category">{product.category}</a>
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${(product.price * 1.3).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>

      <div className="product-showcase">
        <h2 className="title">Trending</h2>

        <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          {minimalProducts.map(product => (
              <div className="showcase" key={product.id}>
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>
                  <a href="#" className="showcase-category">{product.category}</a>
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${(product.price * 1.3).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-container">
          {minimalProducts.map(product => (
              <div className="showcase" key={product.id}>
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>
                  <a href="#" className="showcase-category">{product.category}</a>
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${(product.price * 1.3).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>

      <div className="product-showcase">
        <h2 className="title">Top Rated</h2>

        <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          {minimalProducts.map(product => (
              <div className="showcase" key={product.id}>
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>
                  <a href="#" className="showcase-category">{product.category}</a>
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${(product.price * 1.3).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-container">
          {minimalProducts.map(product => (
              <div className="showcase" key={product.id}>
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>
                  <a href="#" className="showcase-category">{product.category}</a>
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${(product.price * 1.3).toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

  )
}

export default ProductMinimal
