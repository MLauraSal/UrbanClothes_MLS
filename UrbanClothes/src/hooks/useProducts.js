import ProductContext from "../Context/ProductsContext.jsx"
import { useContext } from "react";

export const useProducts = () => useContext(ProductContext);
  


 export default useProducts