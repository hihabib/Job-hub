import classes from "./Hero.module.css";
import featureImage from "./images/feature.png";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div>
        <div>
          <h1>
            One Step Closer To Your{" "}
            <span className={classes.gradientText}>Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a className="button" href="#">
            Get Started
          </a>
        </div>
        <div>
          <img src={featureImage} alt="Feature Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
