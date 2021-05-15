import React from "react";

import img from "../../../img/test.png"; // HAving an issue moving this to be a prop
import { db, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface IProps {
  title: string;
  description: string;
}

const Banner = (props: IProps) => {
  return (
    <div className="banner">
      <div className="homepage-banner-text">
        <div>
          <h1>Mynd</h1>
          <p>Wassup</p>
        </div>
      </div>
      {/* <img src={img} alt="test" /> */}
    </div>
  );
};

export default Banner;
