import { useEffect, useState } from "react";
import { getAllAppliedJobs } from "../../../../../utilities/fakedb";

const useJobList = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const appliedJobsIds = getAllAppliedJobs();
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((allJobs) => {
        const filteredJob = [];
        appliedJobsIds.forEach((id) => {
          const foundJob = allJobs.find((job) => job.id === id);
          filteredJob.push(foundJob);
        });
        setAppliedJobs(filteredJob);
      });
  }, []);

  return appliedJobs;
};
export default useJobList;
