import { useParams } from "react-router-dom";
import classes from "./JobDetails.module.css";
import TitleBar from "../../components/TitleBar/TitleBar";
import Details from "./components/Details/Details";

const JobDetails = () => {
  const { id } = useParams();
  return (
    <section className={classes.jobDetails}>
      <TitleBar>Job Details</TitleBar>
      <Details id={id} />
    </section>
  );
};

export default JobDetails;
