import React from "react";
import Profilepic from "../assets/Profilepic";
import Typical from "react-typical";
import LazyLoad from "react-lazy-load";



function About() {
  return (
    <div>
     <LazyLoad height={762}>
     <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box ">
             
              <Profilepic></Profilepic>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <div className="box my-5 px-5">
                <h1 className="my-3" style={{textAlign:"left"}}>
                   <p> Hello,</p><p>I'm Satyajit Dandi</p>
                    <h1 className="my-3">
                        <Typical loop={Infinity} steps={["Front-End Developer",2000,"Web Developer",2000,"Software Engineer",2000]}></Typical>
                    </h1>
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
