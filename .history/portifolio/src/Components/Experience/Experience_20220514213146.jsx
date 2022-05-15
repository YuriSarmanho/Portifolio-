import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <div></div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <div></div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <div></div>
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <div></div>
            <h4>BootStrap</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <div></div>
            <h4>Tailwind</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <div></div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
          </div>
        </div>
      </div>

      <div className="container experience__container">
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <div></div>
            <BsFillPatchCheckFill />
            <div>
            <h4>Node JS</h4>
            <small className="text-light">Experienced</small>
            </div>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <h4>MongoDb</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <h4>MySQL</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <h4>PHP</h4>
            <small className="text-light">Experienced</small>
          </div>
          <div className="experience__content">
            <BsFillPatchCheckFill />
            <h4>Python</h4>
            <small className="text-light">Experienced</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
