import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home";
import JobDetails from "./pages/JobDetails/JobDetails";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import NoutFound from "./pages/NotFound/NoutFound";
import Statictics from "./pages/Statistics/Statistics";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/statistics",
        element: <Statictics />,
      },
      {
        path: "/*",
        element: <NoutFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
