import React from 'react';
import { useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProjectPageLayout from './ProjectPageLayout';
import DefaultLayout from '../Layout/DefaultLayout';
import assert from "../images/assert.jpg";
import gita from "../images/geeta.jpg";
//import gita from '../images/gita.png'
//import skin from '../images/skin.png'
import skin from "../images/skin.webp";
import alistair from "../images/alistair_project.png";
import cotton from "../images/cotton.jpg";
import cotton1 from '../images/cotton1.png'
import flase from '../images/flase.png'
import mcq from '../images/mcq.jpg'
import vehicle from '../images/vehicle.jpg'
import covid from '../images/covid.png'


const projects = [
  {
    id: "1",
    title: "Asset",
    oneLinerDescription: "The objective is to get the probability of a child developing Type 1 diabetes within specific age intervals",
    liveDemo: "sdnfsmbg",
    imageUrl: assert,
    githubLink: "https://www.asset.healthcare/",
    description: "Our project aims to address a pressing concern among parents and healthcare providers alike: the early prediction of Type 1 diabetes onset in children. By leveraging advanced predictive modeling techniques, we endeavor to provide valuable insights into the probability of a child developing Type 1 diabetes within specific age intervals. This proactive approach not only empowers parents with crucial information but also enables healthcare professionals to intervene early, potentially mitigating the impact of the disease and improving the quality of life for affected children<br /><br /> Purpose: The purpose of our project is two-fold:<br /><br />1.	Early Intervention: By predicting the likelihood of Type 1 diabetes onset across various age intervals, we enable early identification of at-risk children. This allows for timely intervention strategies, such as lifestyle modifications, close monitoring, or medical treatments, aimed at delaying or preventing the onset of the disease.<br /><br />2.	Informed Decision-Making: Armed with probabilistic insights, parents and healthcare providers can make informed decisions regarding the child's healthcare journey. Whether it involves preemptive measures to safeguard against diabetes or preparations to manage the condition effectively upon diagnosis, our project equips stakeholders with the knowledge needed to navigate this complex medical landscape.",
    otherInfo: "Python, NumPy, Pandas, Scikit-Learn, Keras, Machine learning algorithm, Stats models, lifelines, Rest API using Flask,Docker, CICD, Matplotlib and Seaborn."
  },
  {
    id: "2",
    title: "Bhagavad Gita Chatbot",
    oneLinerDescription: "Created chat bot (LLM /Langchain / LLAMA 2) to provide relevant responses to commonly asked questions about the Bhagavad Gita.",
    liveDemo: "",
    imageUrl: gita,
    githubLink: "https://github.com/reenal/geeta-chatbot",
    description: "In a world bustling with questions about spirituality, finding accessible and reliable guidance can be akin to searching for a needle in a haystack. However, imagine if enlightenment were just a conversation away. Introducing the Bhagavad Gita Chatbot – a digital sage crafted to illuminate minds and hearts with the timeless wisdom encapsulated in the sacred scripture, the Bhagavad Gita.<br /><br />Purpose:The primary purpose of the Bhagavad Gita Chatbot is to serve as a beacon of knowledge and insight, readily available to anyone seeking clarity on the profound teachings of the Bhagavad Gita. By harnessing the power of artificial intelligence, this chatbot transcends geographical and temporal boundaries, offering personalized responses to a myriad of spiritual inquiries.<br /><br />Conclusion:In essence, the Bhagavad Gita Chatbot represents more than just a technological innovation – it embodies the eternal quest for knowledge and enlightenment. By harnessing the power of AI to disseminate the teachings of the Bhagavad Gita, it empowers individuals to embark on a transformative journey of self-discovery and spiritual evolution. In a world hungry for wisdom, the Bhagavad Gita Chatbot stands as a testament to the enduring relevance of ancient teachings in the modern era.",
    otherInfo: "Python, Docker, CICD,Hugging Face Hub,AWS EC2, LangSmith,LangChain, Flask, Meta Llama2, Pinecone"
  },
  {
    id: "3",
    title: "Melanoma Skin Cancer",
    oneLinerDescription: "The primary objective of this project is to develop a deep learning model capable of accurately segmenting melanoma regions from skin lesion images. The segmented regions will assist dermatologists in precise diagnosis and treatment planning.",
    liveDemo: "",
    imageUrl: skin,
    githubLink: "https://github.com/reenal/melanoma-skin-cancer-image-segmentation",
    description: "Skin cancer, particularly melanoma, poses a significant health risk worldwide. Early detection is crucial for effective treatment and patient survival. With the advancements in deep learning and medical imaging, automated image segmentation techniques have shown promise in aiding dermatologists in diagnosing melanoma accurately. This project aims to develop a robust melanoma skin cancer image segmentation model based on the U-Net architecture, a popular convolutional neural network (CNN) design known for its effectiveness in medical image segmentation tasks.",
    otherInfo: "Python,Docker,AWS ECR, AWS EC2, CICD,AWS,GITHUB Action,tensorflow, CNN, Keras, NumPy, glob,cv2, Matplotlib,Tensorbord, Pandas, Scikit-Learn, Flask "
  },
  {
    id: "4",
    title: "Alistair",
    oneLinerDescription: "Predict future humidity using LSTM seq-to-seq",
    liveDemo: "",
    imageUrl: alistair,
    githubLink: "",
    description: "The purpose and impact of our project are centered around predicting future humidity levels with precision and reliability. In environments where humidity control is critical, such as vaccine production facilities, maintaining specific humidity levels is paramount to ensure product quality and efficacy.<br /><br />By accurately forecasting humidity fluctuations, our project aims to provide the necessary insights and tools to maintain optimal conditions in these sensitive environments. This not only safeguards the integrity of vaccine production but also contributes to the broader goal of public health by ensuring the effectiveness and safety of vaccines.<br /><br />Moreover, our project has the potential to streamline operations and reduce costs associated with manual monitoring and adjustment of humidity levels. By automating this process based on predictive models, we can enhance efficiency and minimize the risk of human error, ultimately improving overall productivity and reliability in vaccine manufacturing.<br /><br />In summary, the purpose and impact of our project lie in its ability to forecast future humidity levels with precision, thereby enabling the maintenance of optimal conditions for vaccine production. This contributes to the quality, safety, and efficiency of vaccine manufacturing processes, ultimately benefiting public health initiatives worldwide.",
    otherInfo: "Python, NumPy,Docker,Pandas, Scikit-Learn, Keras, Tensorbord, Matplotlib, MLflow,statsmodels,math "
  },
  {
    id: "5",
    title: "Cotton Plant Disease Prediction",
    oneLinerDescription: "Main object of this project to help farmer to solve their problem of plant disease detection.",
    liveDemo: "",
    imageUrl: cotton1,
    githubLink: "",
    description: "The primary aim of our project is to revolutionize agricultural practices by leveraging deep learning techniques, specifically utilizing the ResNet-50 architecture, to address the critical issue of plant disease detection. Agriculture, being the backbone of our society, faces numerous challenges, with plant diseases posing a significant threat to crop yield, quality, and ultimately, food security. Our project endeavors to empower farmers with an advanced tool that can accurately identify plant diseases, thereby enabling timely intervention and management strategies.",
    otherInfo: "Python, NumPy,AWS,Docker,Pandas, seaborn, Scikit-Learn, Keras,tensorflow, Tensorbord, Matplotlib, MLflow, Flask "
  },
  {
    id: "6",
    title: "False Alarm Detection System",
    oneLinerDescription: "Detect false alarm for H2S gas leak which is hazardous to health.",
    liveDemo: "",
    imageUrl: flase,
    githubLink: "https://github.com/reenal/false-alarm",
    description: "This project was made for a chemical industry which had sensors installed in various parts of the factory to detect H2S gas which is hazardous to health. This project was made for a chemical industry which had sensors installed in various parts of the factory to detect H2S gas which is hazardous to health.A few of the alarms that ring are not even hazardous, the company gave us the data for each alarm with final column stating the alarm was dangerous or not",
    otherInfo: "Python, NumPy,AWS,Docker,Pandas, seaborn, Scikit-Learn, Matplotlib, MLflow, Flask, Streamlit, Plotly"
  },
  {
    id: "7",
    title: " AI-powered Multiple Choice Questions (MCQs) Genrator",
    oneLinerDescription: "Provide a body of text and get AI-generated quizzes in seconds.",
    liveDemo: "",
    imageUrl: mcq,
    githubLink: "https://github.com/reenal/mcq_genrator",
    description: "AI-powered app that takes in text, either as Input Text, Pdf File upload or Image uploads of Scans, and generates quizzes from it. It is intended to help teachers create quizzes and exams for their students, and for students to self-study.",
    otherInfo: "Python, NumPy,AWS,Docker,Pandas, seaborn, Scikit-Learn, Matplotlib, MLflow, Flask, Streamlit, Plotly"
  },
  {
    id: "8",
    title: "Vehicle Object Detection",
    oneLinerDescription: "Advanced vehicle object detection system utilizing deep learning algorithms for precise identification and tracking",
    liveDemo: "",
    imageUrl: vehicle,
    githubLink: "https://github.com/reenal/vehicle-object-detection",
    description: "As pedestrians taking the dog for a walk, escorting our kids to school, or marching to our workplace in the morning, we’ve all experienced unsafe, fast-moving vehicles operated by inattentive drivers that nearly mow us down.<br /><br />Many of us live in apartment complexes or housing neighborhoods where ignorant drivers disregard safety and zoom by, going way too fast. We feel almost powerless. These drivers disregard speed limits, crosswalk areas, school zones, and “children at play” signs altogether. When there is a speed bump, they speed up almost as if they are trying to catch some air!<br /><br /> Is there anything we can do? <br /><br />In most cases, the answer is unfortunately “no” — we have to look out for ourselves and our families by being careful as we walk in the neighborhoods we live in.<br /><br /> But what if we could catch these reckless neighborhood miscreants in action and provide video evidence of the which vehicle it is and the time of day to local authorities?",
    otherInfo: "Python, Keras, opencv, tensorflow, NumPy,Tensorboard, AWS, Docker, Pandas, seaborn, Scikit-Learn, Matplotlib, MLflow, Flask, Plotly"
  },
  {
    id: "9",
    title: "Covid-Chat-Bot",
    oneLinerDescription: "Your personalized Covid-Chat-Bot built with Rasa: providing reliable information and support during the pandemic.",
    liveDemo: "",
    imageUrl: covid,
    githubLink: "https://github.com/reenal/rasa-Covid-chat-bot",
    description: "The Covid-Chat-Bot is your reliable companion in navigating the complex landscape of the COVID-19 pandemic. Powered by Rasa, an open-source conversational AI framework, this chatbot is designed to provide accurate and up-to-date information, guidance, and support related to COVID-19.<br /><br />Key Features:<br /><br />Real-time Updates: Stay informed with the latest news, statistics, and developments regarding COVID-19. The chatbot continuously monitors reliable sources to provide users with accurate and timely information.<br /><br /> FAQs and Resources: Access a comprehensive repository of frequently asked questions, curated resources, and reliable sources of information about COVID-19. Whether you're seeking guidance on quarantine protocols or mental health support, the chatbot is a valuable source of assistance.",
    otherInfo: "Python, Rasa, Keras, NumPy, AWS, Docker, Pandas, seaborn, Scikit-Learn, Matplotlib, MLflow, Flask, Plotly"
  },
  
];

const ProjectPage = () => {
  console.log('in projectpage')
  const { id } = useParams();
  console.log("id:"+id);
  const targetRef = useRef(null);

  useEffect(() => {
    const scrollToTarget = () => {
      // const projectElement = document.getElementById(3);  
      // console.log('projectElement: '+projectElement);
      // console.log('id: '+document.);
      if(id) {
        console.log('in if loop: '+id);
        const projectElement = document.getElementById(id);
        // id.scrollIntoView({behavior: 'smooth'});
        if(projectElement){
          // projectElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

          // Get the height of the navbar
        // const navbarHeight = document.querySelector('nav').offsetHeight;
        // Calculate the new offset by subtracting the navbar height from the current offset
        const newOffset = projectElement.getBoundingClientRect().top + window.pageYOffset - (10 * window.innerHeight / 100);
        // Scroll to the adjusted position
        window.scrollTo({ top: newOffset, behavior: 'smooth' });
        }
      }
    };

    scrollToTarget();
  }, [id]);

  // const { id } = useParams();
  // console.log('id: '+id);
  // const targetRef = useRef(id);

  // useEffect(() => {
  //   const scrollToTarget = () => {
  //     if (targetRef.current) {
  //       targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   };

  //   scrollToTarget();
  // }, [id]);

  
  return (
    <DefaultLayout>
      {/* <div> */}
      <div className="app">
        {projects.map(project => (
          <ProjectPageLayout
            key={project.id}
            id={project.id}
            ref={project.id === id ? targetRef: null}
            title={project.title}
            // ref={project.id === id ? targetRef: null}
            oneLinerDescription={project.oneLinerDescription}
            liveDemo={project.liveDemo}
            imageUrl={getImageUrl(project.id)}
            githubLink={project.githubLink}
            description={project.description.split('<br /><br />').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            otherInfo={project.otherInfo}
          />
        ))}
      </div>
      {/* </div> */}
    </DefaultLayout>
  );
};

const getImageUrl = (projectId) => {
  switch (projectId) {
    case "1":
      return assert;
    case "2":
      return gita;
    case "3":
      return skin;
    case "4":
      return alistair;
    case "5":
      return cotton1;
    case "6":
      return flase;
    case "7":
      return mcq;
    case "8":
      return vehicle;
    case "9":
      return covid;
    default:
      return "";
  }
};

export default ProjectPage;