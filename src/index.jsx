import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import ProjectPage from "./ProjectPages/ProjectPage";
import Books from "./components/Books";
// import HobbiesPage from './components/HobbiesPage';
import BlogsPage from "./components/BlogsPage";
import Certificates from "./components/Certificates";
// import EnquiryForm from './components/EnquiryForm';
import ContactUs from "./ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/projects/:id",
    element: <ProjectPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: <Books />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/blogs",
    element: <BlogsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
