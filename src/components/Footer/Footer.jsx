import classes from "./Footer.module.css";
import icons from "./images/icons.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div style={{ flexBasis: "32%" }}>
          <h1>JobHub</h1>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={icons} alt="" />
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
