import useIsAdmin from '../hooks/useIsAdmin';
import { Navigate } from 'react-router-dom';

const AdminOnly = ({ children }) => {
  const isAdmin = useIsAdmin();
  if (!isAdmin) return <Navigate to="/" />;
  return children;
};

export default AdminOnly;
