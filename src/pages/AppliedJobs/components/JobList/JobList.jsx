import classes from "./JobList.module.css";
import Card from "../Card/Card";
import useJobList from "./hooks/useJobList";

const JobList = () => {
  const { appliedJobs, handleFilter } = useJobList();
  return (
    <div className={classes.jobList}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className={classes.filter}>
          <select onChange={handleFilter} className={classes.select}>
            <option value="">Filter By</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">On Site</option>
          </select>
        </div>
      </div>
      {appliedJobs.map((job) => (
        <Card key={job?.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
