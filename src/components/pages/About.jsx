import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          blog web blog web blog web blog web blog web blog web blog web 
        </p>
        <p>
        blog web blog web blog web blog web blog web blog web blog web blog web blog web 
        </p>
        <p>
        blog web blog web blog web blog web blog web blog web blog web blog web blog web blog web 
        </p>
        <p>
        blog web blog web blog web blog web blog web blog web blog web blog web 
        </p>
        <p>
        blog web blog web blog web blog web blog web blog web blog web 
        </p>
      </div>
    </article>
  );
};

export default About;
