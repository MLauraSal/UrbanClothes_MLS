import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Swal from "sweetalert2";
import "../assets/css/Dashboard.css";
import "../assets/css/Dashboard.css";

const ProductsTable = () => {
  const [products, setProducts] = useLocalStorage("products", []);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formProduct, setFormProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    imageFile: null,
  });

  const openModal = (product = null) => {
    setCurrentProduct(product);
    setFormProduct(
      product
        ? { ...product, imageFile: null }
        : { name: "", price: "", category: "", image: "", imageFile: null }
    );
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      setFormProduct({ ...formProduct, imageFile: files[0] });
    } else {
      setFormProduct({ ...formProduct, [name]: value });
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    const save = (imgSrc) => {
      const productToSave = {
        id: currentProduct ? currentProduct.id : Date.now(),
        name: formProduct.name,
        price: parseFloat(formProduct.price),
        category: formProduct.category,
        image: imgSrc,
      };

      const updatedProducts = currentProduct
        ? products.map((p) => (p.id === currentProduct.id ? productToSave : p))
        : [...products, productToSave];

      setProducts(updatedProducts);
      setShowModal(false);
      setCurrentProduct(null);
      setFormProduct({ name: "", price: "", category: "", image: "", imageFile: null });

      Swal.fire({
        icon: "success",
        title: currentProduct ? "Producto actualizado" : "Producto agregado",
        timer: 1500,
        showConfirmButton: false,
      });
    };

    if (formProduct.imageFile) {
      reader.onloadend = () => save(reader.result);
      reader.readAsDataURL(formProduct.imageFile);
    } else {
      save(formProduct.image);
    }
  };

  const deleteProduct = (id) => {
    const prodToDelete = products.find((p) => p.id === id);
    Swal.fire({
      title: "¿Eliminar producto?",
      text: `Se eliminará "${prodToDelete.name}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        setProducts(products.filter((p) => p.id !== id));
        Swal.fire("Eliminado", "El producto fue eliminado.", "success");
      }
    });
  };

  return (
    <div role="tabs-container">
     
      <div role="tabpanel"  >
      
        <div className="tab-pane fade">
        <h3>Listado de Productos</h3>
      <button className="btn btn-success mb-2" onClick={() => openModal()}>
        Agregar Producto
      </button>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>${prod.price}</td>
              <td>{prod.category}</td>
              <td>
                <img src={prod.image} alt={prod.name} width={50} height={50} />
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-1" onClick={() => openModal(prod)}>
                  Editar
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(prod.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h4>{currentProduct ? "Editar Producto" : "Nuevo Producto"}</h4>
            <form onSubmit={handleSaveProduct}>
              <div className="mb-2">
                <label>Nombre</label>
                <input className="form-control" name="name" value={formProduct.name} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label>Precio</label>
                <input className="form-control" name="price" type="number" value={formProduct.price} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label>Categoría</label>
                <input className="form-control" name="category" value={formProduct.category} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label>Imagen (URL o Archivo)</label>
                <input className="form-control" name="image" value={formProduct.image} onChange={handleChange} placeholder="https://..." />
                <input className="form-control mt-2" type="file" name="imageFile" accept="image/*" onChange={handleChange} />
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
