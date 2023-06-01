import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error , {
        position: toast.POSITION.TOP_CENTER
    });
      console.log(err?.data.message);
    }
  };
    return (
        <>
          {isLoading && <Loader />}
          <div className="internet-connection-status" id="internetStatus" />
  <div className="login-wrapper d-flex align-items-center justify-content-center">
    <div className="custom-container">
      <div className="text-center px-4">
        <img className="login-intro-img" src="img/bg-img/36.png" alt="" />
      </div>
      <div className="register-form mt-4">
        <h6 className="mb-3 text-center">Log in to continue to the Muraad Bot</h6>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              id="psw-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <button disabled={isLoading} className="btn btn-primary w-100" type="submit">
            Sign In
          </button>
        </form>
      </div>
    
    </div>
  </div>
        </>
      )
}

export default Login