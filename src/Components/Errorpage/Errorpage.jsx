import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import "./errorpage.css";
import "../../assets/error.mp4";
const ErrorPage = () => {
  return (
    <div className="notfound">
      <div className="notfound__wrapper">
        <div className="notfound__text">
          <div className="texts">
            <h1>Ooops...</h1>
            <h2>Page not found</h2>
            <p>
              The page you are looking for doesn't exist or an other error
              occured, go back to home page
            </p>
          </div>
          <Link to={`/`}>
            <button>Go back</button>
          </Link>
        </div>
        <div className="notfound__img">
          <img src={error} alt="error" />

          <video autoPlay loop muted>
            <source src={404-error} type="video/mp4" />
          </video>
          <video src={error}/>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
