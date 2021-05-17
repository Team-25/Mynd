import React from "react";

import Grid from "@material-ui/core/Grid";
import UserTestimonial from "./UserTestimonial";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";

interface IProps {
  image: ImageBitmap;
}

const DescriptionBlock = (props: IProps) => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="container">
      <div className="content">
        <div id="about" className="homepage-description">
          {!user ? (
            <>
              <h3 className="homepage-login-register">
                Hello, <Link to="login" className="homepage-link"> Login</Link> or{" "}
                <Link to="/register" className="homepage-link">Register</Link> to use our best features.
              </h3>
            </>
          ) : (
            <span></span>
          )}
          <h1>What is Mynd?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue
            dui, luctus in lobortis eget, ullamcorper tristique ante. Duis sit
            amet elit maximus, fringilla diam vel, pretium ex. Morbi elit erat,
            volutpat quis nibh sit amet, egestas interdum nunc. Aliquam justo
            dui, bibendum non risus non, tincidunt finibus mauris.
          </p>
          <hr />
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Nunc dignissim risus id metus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
