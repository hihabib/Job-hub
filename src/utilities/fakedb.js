const applyJob = (id) => {
  let jobs = [];
  if (localStorage.getItem("appliedJobs")) {
    jobs = [...JSON.parse(localStorage.getItem("appliedJobs")), id];
  } else {
    jobs.push(id);
  }
  localStorage.setItem("appliedJobs", JSON.stringify(jobs));
};
const getAllAppliedJobs = () => JSON.parse(localStorage.getItem("appliedJobs"));
const isAppliedToJobs = (id) =>
  JSON.parse(localStorage.getItem("appliedJobs"))
    ? JSON.parse(localStorage.getItem("appliedJobs")).includes(id)
    : false;

export { applyJob, getAllAppliedJobs, isAppliedToJobs };
