import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import DefaultLayout from '../Layout/DefaultLayout';
import assert from "../images/assert.jpg";
//import gita from "../images/geeta.jpg";
import gita from '../images/gita.png'
//import skin from '../images/skin.png'
import skin from "../images/skin.webp";
import alistair from "../images/alistair_project.png";
import cotton from "../images/cotton.jpg";
import cotton1 from '../images/cotton1.png'


const projects = [
  {
    id: "1",
    title: "Asset",
    oneLinerDescription: "The objective is to predict person child T1D or not",
    liveDemo: "sdnfsmbg",
    imageUrl: assert,
    githubLink: "https://www.asset.healthcare/",
    description: "The objective is to predict person child T1D or not. We have used temporal predictive approach to leverage our longitudinal data. Temporal predictive approach address some of the challenges faced in using EHR data these challenges include irregularly sampled data and varying lengths of patient history. Data points unevenly distributed over 0-15 years, we have computed 6 sub-intervals (0-2,2-4,4-6,6-8,8-11,11-15). We have used some of as genetic ,antibodies , bloodbiomarker demographics, family history data. In multitask temporal approach we consider the task of predicting the T1D in each subinterval while creating data for subinterval features are aggregated within time window. We used this subinterval model result to create a meta-Training dataset on this meta-Training dataset we create a Meta-Model to learn weights for each task simultaneously (Multi-Task learning). For subinterval model M1 to M6 we have tried different ML model, but we come up with Logistic Regression performing good as well as for final MTTM Model ( x )= w1M1( x ) + … + w6M6( x ) . This method can be can be adopted to be used over different sub timelines, MTTM can be used as an assistance-tool within a screening program",
    otherInfo: "Python, NumPy, Pandas, Scikit-Learn, Keras, Machine learning algorithm, Stats models, lifelines, Rest API using Flask,Docker, CICD, Matplotlib and Seaborn."
  },
  {
    id: "2",
    title: "Bhagavad Gita Chatbot",
    oneLinerDescription: "Created chat bot (LLM /Langchain / LLAMA 2) to provide relevant responses to commonly asked questions about the Bhagavad Gita.",
    liveDemo: "",
    imageUrl: "",
    githubLink: "https://github.com/reenal/geeta-chatbot",
    description: "The chatbot is designed to provide relevant responses to commonly asked questions about the Bhagavad Gita. The responses are generated using the LangChain generative AI framework, specifically leveraging the Llama2 model. For efficient storage and retrieval of vector embeddings, Pinecone is utilized. The frontend is developed using Flask, providing a seamless and user-friendly interface.Features Custom Data Responses: The chatbot is trained on custom data to provide meaningful and contextually appropriate responses to user queries. LangChain Generative AI: Utilizing the state-of-the-art LangChain framework, with the Llama2 model, ensures the generation of high-quality responses. Efficient Vector Storage: Pinecone is employed for storing vector embeddings, enabling fast and accurate retrieval of information. Flask Frontend: The frontend is developed using Flask, offering a user-friendly interface to interact with the Bhagavad Gita chatbot.",
    otherInfo: "Python, Docker, CICD,Hugging Face Hub,AWS EC2, LangSmith,LangChain, Flask, Meta Llama2, Pinecone"
  },
  {
    id: "3",
    title: "Melanoma Skin Cancer",
    oneLinerDescription: "The primary objective of this project is to develop a deep learning model capable of accurately segmenting melanoma regions from skin lesion images. The segmented regions will assist dermatologists in precise diagnosis and treatment planning.",
    liveDemo: "",
    imageUrl: "",
    githubLink: "https://github.com/reenal/melanoma-skin-cancer-image-segmentation",
    description: "Skin cancer, particularly melanoma, poses a significant health risk worldwide. Early detection is crucial for effective treatment and patient survival. With the advancements in deep learning and medical imaging, automated image segmentation techniques have shown promise in aiding dermatologists in diagnosing melanoma accurately. This project aims to develop a robust melanoma skin cancer image segmentation model based on the U-Net architecture, a popular convolutional neural network (CNN) design known for its effectiveness in medical image segmentation tasks.",
    otherInfo: "Python,Docker,AWS ECR, AWS EC2, CICD,AWS,GITHUB Action,tensorflow, CNN, Keras, NumPy, glob,cv2, Matplotlib,Tensorbord, Pandas, Scikit-Learn, Flask "
  },
  {
    id: "4",
    title: "Alistair",
    oneLinerDescription: "Predict future humidity using LSTM seq-to-seq",
    liveDemo: "",
    imageUrl: "",
    githubLink: "",
    description: "The purpose and impact of our project are centered around predicting future humidity levels with precision and reliability. In environments where humidity control is critical, such as vaccine production facilities, maintaining specific humidity levels is paramount to ensure product quality and efficacy.By accurately forecasting humidity fluctuations, our project aims to provide the necessary insights and tools to maintain optimal conditions in these sensitive environments. This not only safeguards the integrity of vaccine production but also contributes to the broader goal of public health by ensuring the effectiveness and safety of vaccines.Moreover, our project has the potential to streamline operations and reduce costs associated with manual monitoring and adjustment of humidity levels. By automating this process based on predictive models, we can enhance efficiency and minimize the risk of human error, ultimately improving overall productivity and reliability in vaccine manufacturing.In summary, the purpose and impact of our project lie in its ability to forecast future humidity levels with precision, thereby enabling the maintenance of optimal conditions for vaccine production. This contributes to the quality, safety, and efficiency of vaccine manufacturing processes, ultimately benefiting public health initiatives worldwide.",
    otherInfo: "Python, NumPy,Docker,Pandas, Scikit-Learn, Keras, Tensorbord, Matplotlib, MLflow,statsmodels,math "
  },
  {
    id: "5",
    title: "Cotton Plant Disease Prediction",
    oneLinerDescription: "Main object of this project to help farmer to solve their problem of plant disease detection.",
    liveDemo: "",
    imageUrl: "",
    githubLink: "",
    description: "The primary aim of our project is to revolutionize agricultural practices by leveraging deep learning techniques, specifically utilizing the ResNet-50 architecture, to address the critical issue of plant disease detection. Agriculture, being the backbone of our society, faces numerous challenges, with plant diseases posing a significant threat to crop yield, quality, and ultimately, food security. Our project endeavors to empower farmers with an advanced tool that can accurately identify plant diseases, thereby enabling timely intervention and management strategies.The primary aim of our project is to revolutionize agricultural practices by leveraging deep learning techniques, specifically utilizing the ResNet-50 architecture, to address the critical issue of plant disease detection. Agriculture, being the backbone of our society, faces numerous challenges, with plant diseases posing a significant threat to crop yield, quality, and ultimately, food security. Our project endeavors to empower farmers with an advanced tool that can accurately identify plant diseases, thereby enabling timely intervention and management strategies",
    otherInfo: "Python, NumPy,AWS,Docker,Pandas, seaborn, Scikit-Learn, Keras,tensorflow, Tensorbord, Matplotlib, MLflow, Flask "
  }
  
];

const ProjectPage = () => {
  return (
    <DefaultLayout>
      <div className="app">
        {projects.map(project => (
          <ProjectPageLayout
            key={project.id}
            id={project.id}
            title={project.title}
            oneLinerDescription={project.oneLinerDescription}
            liveDemo={project.liveDemo}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            description={project.description.split('<br /><br />').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            otherInfo={project.otherInfo}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default ProjectPage;
