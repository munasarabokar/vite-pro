import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div id="preloader">
    <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  );
};

export default Loader;
