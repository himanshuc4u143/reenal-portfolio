import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
//import reenalBgImg1 from './images/IMG-20240324-WA0106.jpg';

import About from "./components/About";
import EnquiryForm from "./components/EnquiryForm";
import HorizontalChart from "./components/BarChart";
import Footer from "./components/Footer";
import BlogsPage from "./components/BlogsPage";
import RecommendationsPage from "./components/RecommendationsPage";
import VideoThumbnailComponent from "./components/VideoThumbnailComponent";
// import Hobbies from './components/Hobbies';
import Carousel from "./components/Carousel";
import ProjectsHomepage from "./components/ProjectsHomepage";
import ProgressBar from "./components/ProgressBar";
import SuccessStory from './components/SuccessStory';
import Home from './components/Home';
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div>
        <Carousel />
        <Home />
        {/* <About /> */}
        <AboutMe/>
        {/* <HorizontalChart/> */}

        <div className="content">
          {" "}
          {/* Add a container for the Projects section */}
          <ProgressBar />
          <ProjectsHomepage />
          <BlogsPage />
          <RecommendationsPage />
          <SuccessStory/>
          {/* <VerticalCarousel data={data.slides} leadingText={data.leadingText} /> */}
          {/* <Hobbies/> */}
          {/* <Books/> */}
        </div>
        <div>
          <VideoThumbnailComponent />
        </div>
        {/* <VerticalCarousel data={data.slides} leadingText={data.leadingText} /> */}
        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
