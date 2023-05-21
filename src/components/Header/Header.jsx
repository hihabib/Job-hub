import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.title}>Job hub</div>
        <nav>
          <ul className={classes.menu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
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
  );
};

export default Header;
