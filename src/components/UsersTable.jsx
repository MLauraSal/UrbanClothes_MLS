import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Swal from "sweetalert2";
import "../assets/css/Dashboard.css";
import "../assets/css/Global.css";
const UsersTable = () => {
  const [users, setUsers] = useLocalStorage("users", []);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formUser, setFormUser] = useState({
    username: "",
    name: "",
    email: "",
    role: "user",
    avatar: "",
    avatarFile: null,
  });

  const openModal = (user = null) => {
    setCurrentUser(user);
    setFormUser(
      user
        ? {
            ...user,
            avatarFile: null,
          }
        : {
            username: "",
            name: "",
            email: "",
            role: "user",
            avatar: "",
            avatarFile: null,
          }
    );
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatarFile") {
      setFormUser({ ...formUser, avatarFile: files[0] });
    } else {
      setFormUser({ ...formUser, [name]: value });
    }
  };

  const handleSaveUser = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const save = (avatarSrc) => {
      const userToSave = {
        id: currentUser ? currentUser.id : Date.now(),
        username: formUser.username,
        name: formUser.name,
        email: formUser.email,
        role: formUser.role,
        avatar: avatarSrc,
      };

      const updatedUsers = currentUser
        ? users.map((u) => (u.id === currentUser.id ? userToSave : u))
        : [...users, userToSave];

      setUsers(updatedUsers);
      setShowModal(false);
      setCurrentUser(null);
      setFormUser({
        username: "",
        name: "",
        email: "",
        role: "user",
        avatar: "",
        avatarFile: null,
      });

      Swal.fire({
        icon: "success",
        title: currentUser ? "Usuario actualizado" : "Usuario agregado",
        timer: 1500,
        showConfirmButton: false,
      });
    };

    if (formUser.avatarFile) {
      reader.onloadend = () => save(reader.result);
      reader.readAsDataURL(formUser.avatarFile);
    } else {
      save(formUser.avatar);
    }
  };

  const deleteUser = (id) => {
    const userToDelete = users.find((u) => u.id === id);
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminarás a ${userToDelete.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((u) => u.id !== id));
        Swal.fire("Eliminado", "El usuario fue eliminado.", "success");
      }
    });
  };

  return (
    <div role="tabs-container">
      <div role="tabpanel">
        <div role="tab-pane fade">
        <h3>Listado de Usuarios</h3>
        <button className="btn btn-primary mb-2" onClick={() => openModal()}>
          Agregar Usuario
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Avatar</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <img src={u.avatar} alt="avatar" width={50} height={50} />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-1"
                    onClick={() => openModal(u)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteUser(u.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h4>{currentUser ? "Editar Usuario" : "Nuevo Usuario"}</h4>
              <form onSubmit={handleSaveUser}>
                <div className="mb-2">
                  <label>Usuario</label>
                  <input
                    className="form-control"
                    name="username"
                    value={formUser.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label>Nombre</label>
                  <input
                    className="form-control"
                    name="name"
                    value={formUser.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label>Email</label>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    value={formUser.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label>Rol</label>
                  <select
                    className="form-select"
                    name="role"
                    value={formUser.role}
                    onChange={handleChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label>Avatar (URL o Archivo)</label>
                  <input
                    className="form-control"
                    name="avatar"
                    value={formUser.avatar}
                    onChange={handleChange}
                    placeholder="https://..."
                  />
                  <input
                    className="form-control mt-2"
                    type="file"
                    name="avatarFile"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersTable;
