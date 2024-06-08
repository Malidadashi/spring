import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-leftside">
        <div className="column1">
          <ul>
            <li>why spring</li>
            <li>microservices</li>
            <li>reactive</li>
            <li>event driven</li>
            <li>cloud</li>
            <li>web application</li>
            <li>services</li>
            <li>batch</li>
          </ul>
        </div>

        <div className="lc">
          <div className="column2">
            <ul>
              <li>learn</li>
              <li>qickstart</li>
              <li>guides</li>
              <li>blog</li>
            </ul>
          </div>

          <div className="column3">
            <ul>
              <li>community</li>
              <li>events</li>
              <li>team</li>
            </ul>
          </div>
        </div>

        <div className="column4">
          <ul>
            <li>solutions</li>
            <li>tanzu spring</li>
            <li>spring consulting</li>
            <li>spring academi for teams</li>
            <li>spring advisories</li>
          </ul>
        </div>
        <div className="footer-lastcolumn">
          <div className="column5">
            <ul>
              <li>project</li>
              <li>training</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>thank you</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-rightside">
        <div className="boxfooter">
          <h3> Get the spring newsletter</h3>
          <p>stay connected with the spring newsletter</p>
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* down side of the footer */}

      <div className="footer-downside"></div>
    </div>
  );
};

export default Footer;
