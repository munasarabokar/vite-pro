import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import MarketingRoute from './components/MarketingRoute.jsx'
import Login from './screens/LoginScreen.jsx';
import Home from './screens/Home.jsx';
import ProducotId from './screens/prdocutItem.jsx';
import MenuPages from './screens/Pages.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}  
    errorElement={
      <>
      {/* Page Content Wrapper */}
      <br /> <br /><br /><br />
      <br /><br /><br />
      <div className="page-content-wrapper py-3">
        <div className="custom-container">
          <div className="card">
            <div className="card-body px-5 text-center">
              <img className="mb-4" src="/img/bg-img/39.png" alt="" />
              <h4>
                OOPS... <br /> Page not found!
              </h4>
              <p className="mb-4">
                We couldn't find any results for your search. Try again.
              </p>
              <a className="btn btn-creative btn-danger" href="/">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    }>
       {/* public route */}
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProducotId />} />
      <Route path='' element={<PrivateRoute />}>
        {/* authenticated only */}
        <Route path='/' element={<Home />} />
        <Route path='/macaamiil' element={<MenuPages />} />
        <Route path='/dhaqdhaqaaqa' element={<MenuPages />} />
        <Route path='/hormuud' element={<MenuPages />} />
        <Route path='/somtel' element={<MenuPages />} />
        <Route path='/adeegyada' element={<MenuPages />} />
        <Route path='/profile' element={<MenuPages />} />
      </Route>
      <Route path='' element={<MarketingRoute />}>
        {/* marketing and admin rute only */}
      </Route>
      <Route path='' element={<AdminRoute />}>
        {/* admin route only */}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
