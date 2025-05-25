const BASE_URL = "https://fakestoreapi.com";

/**
 * Obtener todos los productos
 */
export async function getAllProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

/* Obtener productos por categoría */
export async function getProductsByCategory(category) {
  try {
    const res = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching category "${category}":`, error);
    return [];
  }
}

/* Obtener un producto por ID */
export async function getProductById(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}

/* Obtener todas las categorías */
export async function getAllCategories() {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  getAllCategories,
};
