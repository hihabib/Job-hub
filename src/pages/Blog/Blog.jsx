import classes from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={classes.blog}>
      <h1>when should we use context api?</h1>
      <p>
        When I want to send data to a very nested component, in that case props
        drilling canbe very bad way to send data to the nested component. Here
        we should use context api
      </p>
      <br />
      <h1>What is custom hook?</h1>
      <p>
        Custom hooks are hooks that are made for applying all the functionality
        of a component in a good looking way. In the component we should write
        only jsx but when we need to write any other code than jsx, than we can
        create a function which return all the necessary data for our jsx and
        the function has to starts with `use`. It is called custom hook.
      </p>
      <br />
      <h1>What is useRef? What is useMemo?</h1>
      <p>
        useRef is a hook of React which use to take a reference of any jsx
        element and canbe treated as a DOM node. useMemo is another hook of
        ReactJs which use to optimize a bulky calculation by remembering the
        previous calculated value. it takes dependency and when the dependencies
        are updated, the bulky calculation process again, otherwise the bulky
        calculation won&apos;t process. In this way useMemo can optimize
        performance of a web app.
      </p>
    </div>
  );
};

export default Blog;
