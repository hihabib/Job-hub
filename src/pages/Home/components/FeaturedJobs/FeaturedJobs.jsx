import classes from "./FeaturedJobs.module.css";
import locationIcon from "./images/location.png";
import dollarIcon from "./images/dollar.png";
import useFeaturedJobs from "./hooks/useFeaturedJobs";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const { jobs, handleSeeAllJobs } = useFeaturedJobs();
  return (
    <section className={classes.featuredJobs}>
      <h1>Featured Jobs</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className={classes.jobs}>
        {jobs.map(({ id, logo, title, compnay, jobType, salary, location }) => (
          <div key={id} className={classes.card}>
            <img style={{ width: "117px", height: "40px" }} src={logo} alt="" />
            <h3>{title}</h3>
            <p className={classes.company}>{compnay}</p>
            <div
              style={{
                display: "flex",
                columnGap: "20px",
                marginBottom: "20px",
              }}
            >
              {jobType.map((type) => (
                <a key={id + type} className="button-outline" href="">
                  {type}
                </a>
              ))}
            </div>
            <div>
              <div className={classes.details}>
                <img src={locationIcon} alt="location" />
                <span>{location}</span>
              </div>
              <div className={classes.details}>
                <img src={dollarIcon} alt="dollar" />
                <div>Salary : {salary}</div>
              </div>
            </div>
            <Link
              to={`/jobs/${id}`}
              style={{ marginTop: "20px" }}
              className="button"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
      >
        <a onClick={handleSeeAllJobs} href="#" className="button">
          See All Jobs
        </a>
      </div>
    </section>
  );
};

export default FeaturedJobs;
