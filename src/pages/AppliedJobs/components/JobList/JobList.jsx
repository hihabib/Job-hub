import classes from "./JobList.module.css";
import Card from "../Card/Card";
import useJobList from "./hooks/useJobList";

const JobList = () => {
  const appliedJobs = useJobList();
  return (
    <div className={classes.jobList}>
      {appliedJobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
