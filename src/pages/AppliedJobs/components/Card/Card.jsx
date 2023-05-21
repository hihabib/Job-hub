import { NavLink } from "react-router-dom";
import classes from "./Card.module.css";
import dollarIcon from "./images/dollar.png";
import locationIcon from "./images/location.png";

const Card = ({ job }) => {
  const { id, title, logo, company, jobType, location, salary } = job ?? {};
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.details}>
        <h3>{title}</h3>
        <span className={classes.company}>{company}</span>
        <div className={classes.jobType}>
          {jobType?.map((type) => (
            <a key={id+type} href="#" className="button-outline">
              {type}
            </a>
          ))}
        </div>
        <div className={classes.info}>
          <div>
            <img src={locationIcon} alt="location" />
            <div>{location}</div>
          </div>
          <div>
            <img src={dollarIcon} alt="salary" />
            <div>{salary}</div>
          </div>
        </div>
      </div>
      <div className={classes.btn}>
        <NavLink to={`/jobs/${id}`} className="button">
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
