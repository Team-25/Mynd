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
            Mynd is a service that's here for you. Need to talk to a peer who you 
            can relate to? Need to speak to a qualified mental health professional? 
            Need a place to stay on top of all the current COVID-19 news? Then Mynd 
            is the place for you. 
            
            <br/><br/>Everybody has mental health, but unlike with physical health, it can be 
            difficult to see or know when you are having difficulties. Being able to 
            access support from qualified professionals or from like minded peers, 
            especially on an easy to access online service, can make such a positive 
            difference.
          </p>
          <hr />
          <ul>
            <li>Voice or video calling with our team of volunteer mental health professionals </li>
            <li>Matching with peers to text chat based on interests and feelings</li>
            <li>Access up to date key information to stay up to date with news about the COVID-19 pandemic</li>
            <li>Keep track of your time and upcoming events with our customisable calendar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
