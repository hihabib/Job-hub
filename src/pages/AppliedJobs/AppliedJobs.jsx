import TitleBar from "../../components/TitleBar/TitleBar";
import classes from "./AppliedJobs";
import JobList from "./components/JobList/JobList";
const AppliedJobs = () => {
  return (
    <section className={classes.appliedJobs}>
      <TitleBar>Applied Jobs</TitleBar>
      <JobList />
    </section>
  );
};

export default AppliedJobs;
