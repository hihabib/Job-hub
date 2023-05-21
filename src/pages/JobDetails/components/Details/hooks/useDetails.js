import { useEffect, useState } from "react";

const useDetails = (id) => {
  const [job, setJob] = useState();
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((job) => setJob(job.find((job) => job.id === id)));
  }, [id]);
  return job ?? {};
};

export default useDetails;
