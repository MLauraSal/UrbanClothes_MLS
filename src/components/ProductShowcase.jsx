import '../assets/css/Sidebar.css';
import '../assets/css/Global.css';
import { useProducts } from '../hooks/useProducts';

const ProductShowcase = ({ title, compact = false }) => {
  const { products } = useProducts();
  const Products = products.slice(0, 4);
  return (
   
    

     <div className="showcase-wrapper">
      {title && <h3 className="showcase-heading">{title}</h3>}
       {Products.map((product) => (
         <div className="showcase" key={product.id}>
           <a href="#" className="showcase-img">
             <img
               src={product.image}
               alt={product.title}
               width={compact ? "65" : "60"}
               height={compact ? "65" : "60"}
               className="showcase-img"
             />
           </a>

           <div className="showcase-content">
             <a href="#">
               <h4 className="showcase-title">{product.title}</h4>
             </a>

             {product.rating && (
               <div className="showcase-rating">
                 {[1, 2, 3, 4, 5].map((n) => (
                   <ion-icon
                     key={n}
                     name={
                       product.rating >= n
                         ? "star"
                         : product.rating >= n - 0.5
                         ? "star-half-outline"
                         : "star-outline"
                     }
                   ></ion-icon>
                 ))}
               </div>
             )}

             {product.category && (
               <a href="#" className="showcase-category">
                 {product.category}
               </a>
             )}

             <div className="price-box">
             
               <p className="price">${product.price}</p>
             </div>
           </div>
         </div>
       ))}
     </div>
  );
};

export default ProductShowcase;
