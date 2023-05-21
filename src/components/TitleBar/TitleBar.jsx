import classes from "./TitleBar.module.css";

const TitleBar = ({ children }) => {
  return (
    <div className={classes.titleBar}>
      <div>
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default TitleBar;
