import classes from "./JobCategories.module.css";
import accounts from "./images/accounts.png";
import business from "./images/business.png";
import chip from "./images/chip.png";
import social from "./images/social.png";
const JobCategories = () => {
  return (
    <div className={classes.jobCategories}>
      <h1>Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className={classes.categories}>
        <div className={classes.card}>
          <img src={accounts} alt="Account icon" />
          <h3>Account & Finance</h3>
          <p>300+ jobs Available</p>
        </div>
        <div className={classes.card}>
          <img src={business} alt="Account icon" />
          <h3>Creative Design</h3>
          <p>100+ jobs Available</p>
        </div>
        <div className={classes.card}>
          <img src={social} alt="Account icon" />
          <h3>Marketing & Sales</h3>
          <p>150+ jobs Available</p>
        </div>
        <div className={classes.card}>
          <img src={chip} alt="Account icon" />
          <h3>Engineering Job</h3>
          <p>240+ jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
