import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import Hero from "./components/Hero/Hero";
import JobCategories from "./components/JobCategories/JobCategories";
const Home = () => {
  return (
    <>
      <Hero />
      <JobCategories />
      <FeaturedJobs />
    </>
  );
};

export default Home;
