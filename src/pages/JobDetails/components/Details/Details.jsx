import useDetails from "./hooks/useDetails";
import classes from "./Details.module.css";
import dollarIcon from "./images/dollar.png";
import calenderIcon from "./images/calender.png";
import phoneIcon from "./images/phone.png";
import emailIcon from "./images/message.png";
import locationIcon from "./images/location.png";

const Details = ({ id }) => {
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experience,
    salary,
    title,
    contactNumber,
    email,
    location,
    handleApplyNow,
    isDiasbledApplyButton,
  } = useDetails(id);

  return (
    <div className={classes.details}>
      <article>
        <p>
          <strong>Job Description: </strong>
          {jobDescription}
        </p>
        <p>
          <strong>Job Responsibility: </strong>
          {jobResponsibility}
        </p>
        <p>
          <strong>Educational Requirements: </strong>
          <br />
          {educationalRequirements}
        </p>
        <p>
          <strong>Experiences: </strong>
          <br />
          {experience}
        </p>
      </article>
      <div>
        <div className={classes.card}>
          <h3>Job Details</h3>
          <hr />
          <div className={classes.detailsConainer}>
            <div className={classes.detailsList}>
              <img src={dollarIcon} alt="Dollar" />
              <p>
                <strong>Salary:</strong> {salary}(Per Month)
              </p>
            </div>
            <div className={classes.detailsList}>
              <img src={calenderIcon} alt="Title" />
              <p>
                <strong>Job title:</strong> {title}
              </p>
            </div>
          </div>
          <h3>Contact Information</h3>
          <hr />
          <div className={classes.detailsConainer}>
            <div className={classes.detailsList}>
              <img src={phoneIcon} alt="Phone" />
              <p>
                <strong>Phone:</strong> {contactNumber}
              </p>
            </div>
            <div className={classes.detailsList}>
              <img src={emailIcon} alt="Email" />
              <p>
                <strong>Email:</strong> {email}
              </p>
            </div>
            <div className={classes.detailsList}>
              <img src={locationIcon} alt="Address" />
              <p>
                <strong>Address:</strong> {location}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleApplyNow(id)}
          disabled={isDiasbledApplyButton}
          style={{ width: "100%", marginBottom: "60px" }}
          className="button"
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Details;
