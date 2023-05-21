import { NavLink, Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
const Layout = () => {
  return (
    <>
      <header className={classes.header}>
        <div>
          <div className={classes.title}>Job hub</div>
          <nav>
            <ul className={classes.menu}>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/applied-jobs">Applied Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <a className="button" href="#">
              Start Applying
            </a>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
