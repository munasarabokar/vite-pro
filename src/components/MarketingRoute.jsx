import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MarketingRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo.role !== 'subscriber' ? <Outlet /> : <Navigate to='/profile' replace />;
};
export default MarketingRoute;
