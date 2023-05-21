import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import classes from "./Statistics.module.css";

const data = [
  {
    name: "Assignment 2",
    mark: 30,
  },
  {
    name: "Assignment 3",
    mark: 30,
  },
  {
    name: "Assignment 4",
    mark: 21,
  },
  {
    name: "Assignment 5",
    mark: 30,
  },
  {
    name: "Assignment 6",
    mark: 30,
  },
];
const Statictics = () => {
  return (
    <div className={classes.statictics}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type={"monotone"} dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statictics;
