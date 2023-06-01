import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo.role == 'admin' ? <Outlet /> : <Navigate to='/profile' replace />;
};
export default AdminRoute;
