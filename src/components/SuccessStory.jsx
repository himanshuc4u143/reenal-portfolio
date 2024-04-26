import React from "react";
import img1 from "../images/Screenshot from 2024-04-15 18-24-19.png";
import { MDBCol } from "mdb-react-ui-kit";
import img from "../images/about_Me.png";
import { useEffect, useState } from "react";
import "./successStory.css";

export default function SuccessStory() {
  // State to store the height of the first div
  const [div2Height, setDiv2Height] = useState(0);
  const [parentDivWidth, setParentDivWidth] = useState(0);

  // Function to calculate and update the height of div1
  const updateDiv2Height = () => {
    const div2 = document.getElementById("div2");
    if (div2) {
      setDiv2Height(div2.offsetHeight);
    }
  };

  const updateParentDivWidth = () => {
    const parentDiv = document.getElementById("parentDiv");
    if (parentDiv) {
      setParentDivWidth(parentDiv.offsetWidth / 2);
    }
  };

  // useEffect hook to update the height of div1 when the component mounts or updates
  useEffect(() => {
    updateDiv2Height();
    // Re-calculate height whenever the window is resized
    window.addEventListener("resize", updateDiv2Height);
    // Clean up event listener to avoid memory leaks
    return () => {
      window.removeEventListener("resize", updateDiv2Height);
    };
  }); // Empty dependency array means this effect will only run once when the component mounts

  useEffect(() => {
    updateParentDivWidth();
    window.addEventListener("resize", updateParentDivWidth);
    return () => {
      window.removeEventListener("resize", updateParentDivWidth);
    };
  }, []);
  return (
    <div>
      <div className="empty-div">
        <h2 className="gradient-text header-container">My Success Stories</h2>
        {/* <header className="header-container">
          <h1 className="black-bold">Some of My Recent Works</h1>
        </header>
        <p className="par-content">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p> */}
      </div>
      <div
        className="d-flex align-items-start bg-body-tertiary mb-3"
        id="parentDiv"
        style={{
          border: "15px solid transparent",
          borderImage:
            "linear-gradient(45deg, #800080, #87ceeb, #8a2be2, #00ffff) 1",
          borderRadius: "10px",
          borderImageSlice: "10", // Adjust the radius to match the borderRadius
          margin: "10px",
        }}
      >
        <MDBCol
          className="overflow-auto"
          style={{
            height: div2Height,
            minHeight: div2Height,
            // overflowY: 'hidden'
          }}
          id="div1"
        >
          <style>
            {`
                /* Hide scrollbar for Chrome, Safari, and Opera */
                ::-webkit-scrollbar {
                    display: none;
                }
            `}
          </style>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h3
                className="gradient-text empty-div"
                style={{ marginBottom: "0px" }}
              >
                From Backend Developer to core Data Scientist
              </h3>
              <br />
              <h4 className="bold gradient-text">The Education</h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              I started my journey with a bachelors of science in Electronics.
              Having a keen interest in mathematics I did my masters in
              Industrial Mathematics and Computer Applications
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">Lockdown and time ...</h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              My earlier job roles were on the lines of backend development and
              software consultant. During lockdown, with time in hand, and
              curiosity towards mathematics I stumbled upon Data science field.
              The way the world of predictions, analytics and deductions worked
              fascinated me a lot
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">The learning roadmap ...</h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              There are abundance of resources online. I tried to keep it
              simple, started with basics of mathematics, then smaller
              introductions from here and there and I thn followed Ineroun
              course which I felt had everything to begin with. Mentors like
              Sudhanshu , Krish has biggest impact on my data science journey i
              am always thankful to them
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">
                The everyday upskilling ...
              </h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              My go to approaches include reading books and papers, doing
              certification, exploring top platforms Kaggle, LinkedIn and
              Paperswithcode. I experiment with implementing different SOTA
              papers. One most important thing while upskillng is to get your
              hand dirty with data.
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">The motivation ....</h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              The biggest one is my love towards mathematics and its magic. Then
              I enjoy mentoring which is one of way for me to be on a continuous
              upskilling journey. I feel data always tells truth, as you go
              deeper inside you see a different pattern that is one of thing
              keep me motivate and most important have fun enjoy
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">Daily Job looks like ...</h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              I have been lucky that my role involves me to be a part of end to
              end ML lifecycle. Definitely its like a big roller coaster but
              with lot of learnings and thats what I always look for. I think
              all MLOps phases are important but understanding domain knowledge
              and integrating it into your project is key for any data science
              project
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">The challenges ...</h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              <ul>
                <li>
                  understanding domain knowledge. To tackle this, I read a lot
                  about the domain and get assistance from domain experts
                </li>
                <li>
                  extracting right information. I validate this again with the
                  help of domain experts. Key is to master your conversational
                  and listening skills.
                </li>
                <li>
                  Defining the Problem statement. Once I am satisfied with the
                  domain and the issues faced by my client I convert the
                  business problem to an AI problem, this part comes with
                  experience and learning from others (Conversational skills)
                </li>
              </ul>
            </p>
          </div>
          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h4 className="bold gradient-text">
                To the beginners in this field ...
              </h4>
            </center>
            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              Data science is a vast ocean, so have patience while learning
              ,focus on math of each algorithm, participate in hackathons. Focus
              on your communication skills, ask questions and learn from others'
              experiences. Work on different domains, gather knowledge there.
              Mentor/Teach if you can, you will learn better!!!
            </p>
            <center>
              <h5 className="bold gradient-text">
                Love, Practice, Repeat ....
              </h5>
            </center>
          </div>
        </MDBCol>
        <MDBCol
          className="overflow-auto"
          style={{ width: parentDivWidth, height: "500px" }}
          id="div2"
        >
          {/* <img
            src={img}
            alt=""
            className="rounded-4 shadow-4"
            style={{ width: parentDivWidth }}
          /> */}

          <div
            style={{
              border: "10px solid #0091e6",
              borderRadius: "4px",
              backgroundColor: "#38b6ff",
              marginBottom: "4px",
            }}
          >
            <center>
              <h3
                className="gradient-text empty-div"
                style={{ marginBottom: "0px" }}
              >
                Here's another story published on{" "}
                <span className="bold" style={{ color: "olive" }}>
                  <a href="https://wimldspune.wordpress.com/2022/04/02/reenal-boddul/">
                    wimldspune.wordpress.com
                  </a>
                </span>
              </h3>
              <br />
            </center>
            <h4 className="bold gradient-text" style={{ paddingLeft: "10px" }}>
              Here's my story...
            </h4>

            <p className="par-content" style={{ paddingLeft: "10px", fontStyle: "italic" }}>
              “I connected with WiDS when I visited Pune, my hometown for a
              vacation in 2019 and really made the best investment of my time &
              this is how my Data Science Journey started” ” I have done BSc in
              “Electronics” and M.Tech in “Industrial Maths and Computer
              Applications”. I always loved to play with numbers and Mathematics
              has been my primary focus. Although I started my career as a
              back-end developer, I kept on exploring opportunities in
              Mathematics. ” says Reenal Boddul who is based out of
              Sweden-Stockholm. Here is Reenal sharing her story, how WiDS Pune
              initiatives inspired her & how she reskilled herself and got a job
              as a Data Scientist at Mainly.ai, Sweden. I truly discovered
              myself and my passion when I started working on Data Science. Yes,
              this is what I really like, love and enjoy doing!.
              <br />
              <br />
              I realized this and strongly felt this while attending WiDS Pune 2019 conference
              with amazing applications of ML in very diverse sectors & line up
              of speakers who were so positive & successful in their field.It
              was an amazing experience to visualize all facets of data science
              and its use cases showcased in WiDS Pune 2019 conference. Despite
              being a highly mathematical subject, it was awesome to see how
              Lego blocks were used to create a 3D bar chart which gave real
              time insights about the conference, games to explain statistical
              concepts, face recognition for seamless registrations, live
              scribing! All this really deeply & truly inspired me to study,
              research and explore more about data science. 
              <br />
              <br />
              Initially, I attended WiDS Pune pre conference events as a participant, which
              were full day workshops on modelling, python, Cloud and IOT. After
              spending few weekends with WiDS Pune community, I soon transformed
              into a WiDS Pune volunteer and played an active role during the
              Main Conference. The innovation and creativity displayed through
              small little activities & success stories further inspired me to
              do more and more and now I was an active member of the community &
              have been attending all events in 2020, 2021, where lot of
              knowledge, information, various opportunities are shared
              transparently. It’s a very open, flexible and friendly platform
              for anyone to join, just be there, observe, learn, explore at
              one’s own speed and pace. We got good personalized mentoring,
              advise and ample time and support from the organizers in choosing
              our learning path. 
              <br />
              <br />
              I then decided to learn this subject formally,
              and get certified. I chose ineuron.ai as the platform to get
              certified. I started learning all tools, libraries needed for data
              science such as google Collaboratory, Flask, and different
              algorithms. I started following influencers such as Elon Musk,
              Krish Nike just & many. I explored top platforms Kaggle, LinkedIn,
              & Paperwithcode. When I was ready to transition my career in DS
              field, I decided to strengthen my profile on github & build my
              resume and started applying for jobs. Initially, I faced a lot of
              rejections as everyone wanted experience in data science but I
              didn’t give up and kept on learning from my interview experiences.
              After consistent efforts, hard work and perseverance I got a job
              in DS at Mainly.ai. 
              <br />
              <br />
              Although I am in Sweden currently, I am
              closely connected and associated with WiDS Pune organizers and
              follow all their activities and events. The recent capacity
              building program in April-May 2021 on “Responsible AI”, I got
              access to via WiDS Pune is a “Gold Mine”. I get up at 6.30 a.m.
              Sweden time to attend this course and I really wait and long for
              the next session. I thank WiDS Pune for their community learning
              efforts, it has given me so much of confidence to do more and
              every time I participate in any WiDS activities, I always feel
              like doing more!
            </p>
          </div>
        </MDBCol>
      </div>
    </div>
  );
}
