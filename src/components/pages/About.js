import React, {Suspense} from "react";
// import Profilepic from "../assets/Profilepic";
import Typical from "react-typical";
import LazyLoad from "react-lazy-load";
import { BsFacebook } from "react-icons/fa";

const Profilepic = React.lazy(() => import("../assets/Profilepic"));

function About() {
   const custom = {
    marginTop: 0,
    marginbottom: 0,
   };
  return (
    <div>
      <LazyLoad height={660} className="my-5 hg">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="box bg-image">
                <Suspense fallback={<div>Loading....</div>}>
                  <Profilepic></Profilepic>
                </Suspense>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
              <div className="box my-5 px-5">
                <h1 className="my-3" style={{ textAlign: "left" }}>
                  <p> Hello,</p>
                  <p>I'm Satyajit Dandi</p>
                  <h1 className="my-3">
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Front-End Developer",
                        2000,
                        "Web Developer",
                        2000,
                        "Software Engineer",
                        2000,
                      ]}
                    ></Typical>
                  </h1>
                  <div>
                    <a href="">
                      <BsFacebook />
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
}

export default About;
