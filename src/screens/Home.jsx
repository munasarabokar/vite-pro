import React, { useEffect, useState } from 'react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation , useHomePageMutation} from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Header from '../components/Home/Header';
import Loader from '../components/Loader';
function Home() {
  const { userInfo } = useSelector((state) => state.auth);
  // view home handle
const  [homePage , {isLoading}] = useHomePageMutation()
const [users , setUsers] = useState([''])

useEffect( () => {
  async function home () {
    const res = await homePage()
    setUsers(res.data.user)
  }
  home()

}, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
     
    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <>
    {isLoading && <Loader />}
    <div className="internet-connection-status" id="internetStatus" />
    <div className="header-area" id="headerArea">
      <div className="container">
        <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
          <div className="logo-wrapper">
            <a href="home.html">
              <img src="img/core-img/logo.png" alt="" />
            </a>
          </div>
          <div
            className="navbar--toggler"
            id="affanNavbarToggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#affanOffcanvas"
            aria-controls="affanOffcanvas"
          >
            <span className="d-block" />
            <span className="d-block" />
            <span className="d-block" />
          </div>
        </div>
      </div>
    </div>
    <div
      className="offcanvas offcanvas-start"
      id="affanOffcanvas"
      data-bs-scroll="true"
      tabIndex={-1}
      aria-labelledby="affanOffcanvsLabel"
    >
      <button
        className="btn-close btn-close-white text-reset"
        type="button"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
     <Header 
     logoutHandler={logoutHandler} 
     username={users.user_name} 
     name={users.full_name} 
     role={users.role}
     />
    </div>
    <div className="page-content-wrapper">
      <div
        className="toast toast-autohide custom-toast-1 toast-success home-page-toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-delay={7000}
        data-bs-autohide="true"
      >
        <div className="toast-body">
          <i className="bi bi-bookmark-check text-white h1 mb-0" />
          <div className="toast-text ms-3 me-2">
            <p className="mb-1 text-white">Welcome to Affan!</p>
            <small className="d-block">
              Click the <strong>Add to Home Screen</strong> button &amp; enjoy it
              like an app.
            </small>
          </div>
        </div>
        <button
          className="btn btn-close btn-close-white position-absolute p-1"
          type="button"
          data-bs-dismiss="toast"
          aria-label="Close"
        />
      </div>
     
      <div className="pt-3" />
      <div className="container direction-rtl">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/pwa.png" alt="" />
                  </div>
                  <p className="mb-0">PWA Ready</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/bootstrap.png" alt="" />
                  </div>
                  <p className="mb-0">Bootstrap 5</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/js.png" alt="" />
                  </div>
                  <p className="mb-0">Vanilla JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="card card-bg-img bg-img bg-overlay mb-3"
          style={{ backgroundImage: 'url("img/bg-img/3.jpg")' }}
        >
          <div className="card-body direction-rtl p-4">
            <h2 className="text-white">Reusable elements</h2>
            <p className="mb-4 text-white">
              More than 220+ reusable modern design elements. Just copy the code
              and paste it on your desired page.
            </p>
            <a className="btn btn-warning" href="elements.html">
              All elements
            </a>
          </div>
        </div>
      </div>
      <div className="container direction-rtl">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/sass.png" alt="" />
                  </div>
                  <p className="mb-0">SCSS</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/npm.png" alt="" />
                  </div>
                  <p className="mb-0">npm</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/gulp.png" alt="" />
                  </div>
                  <p className="mb-0">Gulp 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="card bg-primary mb-3 bg-img"
          style={{ backgroundImage: 'url("img/core-img/1.png")' }}
        >
          <div className="card-body direction-rtl p-4">
            <h2 className="text-white">Ready pages</h2>
            <p className="mb-4 text-white">
              Already designed more than 100+ pages for your needs. Such as -
              Authentication, Chats, eCommerce, Blog &amp; Miscellaneous pages.
            </p>
            <a className="btn btn-warning" href="pages.html">
              All Pages
            </a>
          </div>
        </div>
      </div>
      <div className="container direction-rtl">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/dark.png" alt="" />
                  </div>
                  <p className="mb-0">Dark Mode</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/rtl.png" alt="" />
                  </div>
                  <p className="mb-0">RTL Ready</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/code.png" alt="" />
                  </div>
                  <p className="mb-0">Easy Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card mb-3">
          <div className="card-body">
            <h3>Customer Review</h3>
            <div className="testimonial-slide-three-wrapper">
              <div className="testimonial-slide3 testimonial-style3">
                <div className="single-testimonial-slide">
                  <div className="text-content">
                    <span className="d-inline-block badge bg-warning mb-2">
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill" />
                    </span>
                    <h6 className="mb-2">
                      The code looks clean, and the designs are excellent. I
                      recommend.
                    </h6>
                    <span className="d-block">Mrrickez, Themeforest</span>
                  </div>
                </div>
                <div className="single-testimonial-slide">
                  <div className="text-content">
                    <span className="d-inline-block badge bg-warning mb-2">
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill" />
                    </span>
                    <h6 className="mb-2">
                      All complete, <br /> great craft.
                    </h6>
                    <span className="d-block">Mazatlumm, Themeforest</span>
                  </div>
                </div>
                <div className="single-testimonial-slide">
                  <div className="text-content">
                    <span className="d-inline-block badge bg-warning mb-2">
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill" />
                    </span>
                    <h6 className="mb-2">
                      Awesome template! <br /> Excellent support!
                    </h6>
                    <span className="d-block">Vguntars, Themeforest</span>
                  </div>
                </div>
                <div className="single-testimonial-slide">
                  <div className="text-content">
                    <span className="d-inline-block badge bg-warning mb-2">
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill me-1" />
                      <i className="bi bi-star-fill" />
                    </span>
                    <h6 className="mb-2">
                      Nice modern design, <br /> I love the product.
                    </h6>
                    <span className="d-block">electroMEZ, Themeforest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container direction-rtl">
        <div className="card">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/star.png" alt="" />
                  </div>
                  <p className="mb-0">Best Rated</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/elegant.png" alt="" />
                  </div>
                  <p className="mb-0">Elegant</p>
                </div>
              </div>
              <div className="col-4">
                <div className="feature-card mx-auto text-center">
                  <div className="card mx-auto bg-gray">
                    <img src="img/demo-img/lightning.png" alt="" />
                  </div>
                  <p className="mb-0">Trendsetter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-3" />
    </div>
    <div className="footer-nav-area" id="footerNav">
      <div className="container px-0">
        <div className="footer-nav position-relative">
          <ul className="h-100 d-flex align-items-center justify-content-between ps-0">
            <li className="active">
              <a href="home.html">
                <i className="bi bi-house" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="pages.html">
                <i className="bi bi-collection" />
                <span>Pages</span>
              </a>
            </li>
            <li>
              <a href="elements.html">
                <i className="bi bi-folder2-open" />
                <span>Elements</span>
              </a>
            </li>
            <li>
              <a href="chat-users.html">
                <i className="bi bi-chat-dots" />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i className="bi bi-gear" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Home