import { useEffect, useState } from "react";

const useFeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((jobs) => setJobs(jobs.slice(0, 4)));
  }, []);

  const handleSeeAllJobs = (e) => {
    e.preventDefault();
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((jobs) => {
        e.target.style.display = "none";
        setJobs(jobs);
      });
  };
  return { jobs, handleSeeAllJobs };
};

export default useFeaturedJobs;
