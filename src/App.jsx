import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";

import EnquiryForm from "./components/EnquiryForm";
// import HorizontalChart from "./components/BarChart";
import Footer from "./components/Footer";
import RecommendationsPage from "./components/RecommendationsPage";
import VideoThumbnailComponent from "./components/VideoThumbnailComponent";
// import Hobbies from './components/Hobbies';
import ProjectsHomepage from "./components/ProjectsHomepage";
import SuccessStory from "./components/SuccessStory";
import AboutMe from "./components/AboutMe";
import BlogsHomePage from "./components/BlogsHomePage";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div>
        <AboutMe />

        <TechStack />
        <div className="content">
          {" "}
          {/* Add a container for the Projects section */}
          <ProjectsHomepage />
          <BlogsHomePage />
          <RecommendationsPage />
          <SuccessStory />
        </div>
        <div>
          <VideoThumbnailComponent />
        </div>

        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
