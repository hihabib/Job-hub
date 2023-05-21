import { useEffect, useState } from "react";
import { getAllAppliedJobs } from "../../../../../utilities/fakedb";

const useJobList = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const appliedJobsIds = getAllAppliedJobs();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((allJobs) => {
        const filteredJob = [];
        appliedJobsIds.forEach((id) => {
          let foundJob;
          switch (filter) {
            case "":
              foundJob = allJobs.find((job) => job.id === id);
              filteredJob.push(foundJob);
              break;
            default:
              foundJob = allJobs.find(
                (job) => job.id === id && job.jobType.includes(filter)
              );
              foundJob && filteredJob.push(foundJob);
          }
        });
        setAppliedJobs(filteredJob);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return { appliedJobs, handleFilter };
};
export default useJobList;
