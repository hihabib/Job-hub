import { useEffect, useState } from "react";
import { applyJob, isAppliedToJobs } from "../../../../../utilities/fakedb";

const useDetails = (id) => {
  const [job, setJob] = useState();
  const [isDiasbledApplyButton, setIsDisabledApplyButton] = useState(true);
  useEffect(() => {
    !isAppliedToJobs(id)
      ? setIsDisabledApplyButton(false)
      : setIsDisabledApplyButton(true);
  }, [id]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((job) => setJob(job.find((job) => job.id === id)));
  }, [id]);
  const handleApplyNow = (id) => {
    if (!isAppliedToJobs(id)) {
      applyJob(id);
      setIsDisabledApplyButton(true);
    }
  };
  return { ...job, handleApplyNow, isDiasbledApplyButton } ?? {};
};

export default useDetails;
