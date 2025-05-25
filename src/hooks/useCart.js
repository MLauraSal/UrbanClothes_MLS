import CartContext from "../Context/CartContext";
import { useContext } from "react";


export const useCart = () => useContext(CartContext);
