// BlogsPage.js

import React from "react";
import Blog from "./Blog";
import DefaultLayout from "../Layout/DefaultLayout";
import "./projects.css";

const BlogsPage = () => {
  // Example data for blogs
  const blogs = [
    {
      id: 1,
      title:
        "Explore the New Frontier of AI with Grok-1.5V: Your Multimodal Companion 🚀",
      //date: 'March 1, 2024',
      author: "Reenal Boddul",
      content:
        "Hello All! Have you heard about Grok-1.5V? It’s not just another LLM model; it’s like giving your computer superpowers! Let me break it down for you in simple terms. So, whats the big deal with Grok-1.5V? Well, imagine a computer program that can understand not only text but also pictures, diagrams, charts, and even photos you take. Cool, right? Grok-1.5V isn t just a jack-of-all-trades; it is a master of many. It can handle all sorts of tasks, from understanding documents and science stuff to analyzing screenshots and real life photographs. It is like having a super-smart buddy who can help you make sense of the world around you. One of the coolest things about Grok-1.5V is its RealWorldQA benchmark what I found is vary interesting and powerfull. Sounds fancy, but it’s actually pretty straightforward. It’s like a test for AI to see how well it understands real-world stuff. And guess what? Grok-1.5V aces it! It’s great at understanding the world just like we do check on videos of demo on link below. And the best part? You can get in on the action too! You can download the RealWorldQA dataset and see for yourself how Grok-1.5V tackles real-world challenges. It’s like peeking behind the curtain of AI magic. But wait, there’s more! The folks behind Grok-1.5V are constantly working to make it even better. They’re not stopping here; they’re pushing the boundaries of what AI can do. So, who knows what amazing things Grok-1.5V will be able to do in the future? In a nutshell, Grok-1.5V is like having a super-smart friend who can understand the world in ways we never thought possible. So, why not give it a try? Who knows what incredible things you’ll discover with Grok-1.5V by your side! hashtag#LLM hashtag#Grok-1.5V hashtag#Grok hashtag#X hashtag#LLMRace hashtag#ElonMusk hashtag#MultiModel hashtag#DeepLearning hashtag#AI hashtag#DataScience",
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "March 15, 2024",
      author: "Your Name",
      content:
        "Hello All! Have you heard about Grok-1.5V? It’s not just another LLM model; it’s like giving your computer superpowers! Let me break it down for you in simple terms. So, whats the big deal with Grok-1.5V? Well, imagine a computer program that can understand not only text but also pictures, diagrams, charts, and even photos you take. Cool, right? Grok-1.5V isn t just a jack-of-all-trades; it is a master of many. It can handle all sorts of tasks, from understanding documents and science stuff to analyzing screenshots and real life photographs. It is like having a super-smart buddy who can help you make sense of the world around you. One of the coolest things about Grok-1.5V is its RealWorldQA benchmark what I found is vary interesting and powerfull. Sounds fancy, but it’s actually pretty straightforward. It’s like a test for AI to see how well it understands real-world stuff. And guess what? Grok-1.5V aces it! It’s great at understanding the world just like we do check on videos of demo on link below. And the best part? You can get in on the action too! You can download the RealWorldQA dataset and see for yourself how Grok-1.5V tackles real-world challenges. It’s like peeking behind the curtain of AI magic. But wait, there’s more! The folks behind Grok-1.5V are constantly working to make it even better. They’re not stopping here; they’re pushing the boundaries of what AI can do. So, who knows what amazing things Grok-1.5V will be able to do in the future? In a nutshell, Grok-1.5V is like having a super-smart friend who can understand the world in ways we never thought possible. So, why not give it a try? Who knows what incredible things you’ll discover with Grok-1.5V by your side! hashtag#LLM hashtag#Grok-1.5V hashtag#Grok hashtag#X hashtag#LLMRace hashtag#ElonMusk hashtag#MultiModel hashtag#DeepLearning hashtag#AI hashtag#DataScience",
    },
    // Add more blog posts here
    {
      id: 3,
      title:
        "Explore the New Frontier of AI with Grok-1.5V: Your Multimodal Companion 🚀",
      //date: 'March 1, 2024',
      author: "Reenal Boddul",
      content:
        "Hello All! Have you heard about Grok-1.5V? It’s not just another LLM model; it’s like giving your computer superpowers! Let me break it down for you in simple terms. So, whats the big deal with Grok-1.5V? Well, imagine a computer program that can understand not only text but also pictures, diagrams, charts, and even photos you take. Cool, right? Grok-1.5V isn t just a jack-of-all-trades; it is a master of many. It can handle all sorts of tasks, from understanding documents and science stuff to analyzing screenshots and real life photographs. It is like having a super-smart buddy who can help you make sense of the world around you. One of the coolest things about Grok-1.5V is its RealWorldQA benchmark what I found is vary interesting and powerfull. Sounds fancy, but it’s actually pretty straightforward. It’s like a test for AI to see how well it understands real-world stuff. And guess what? Grok-1.5V aces it! It’s great at understanding the world just like we do check on videos of demo on link below. And the best part? You can get in on the action too! You can download the RealWorldQA dataset and see for yourself how Grok-1.5V tackles real-world challenges. It’s like peeking behind the curtain of AI magic. But wait, there’s more! The folks behind Grok-1.5V are constantly working to make it even better. They’re not stopping here; they’re pushing the boundaries of what AI can do. So, who knows what amazing things Grok-1.5V will be able to do in the future? In a nutshell, Grok-1.5V is like having a super-smart friend who can understand the world in ways we never thought possible. So, why not give it a try? Who knows what incredible things you’ll discover with Grok-1.5V by your side! hashtag#LLM hashtag#Grok-1.5V hashtag#Grok hashtag#X hashtag#LLMRace hashtag#ElonMusk hashtag#MultiModel hashtag#DeepLearning hashtag#AI hashtag#DataScience",
    },
    {
      id: 4,
      title: "Second Blog Post",
      date: "March 15, 2024",
      author: "Your Name",
      content:
        "Hello All! Have you heard about Grok-1.5V? It’s not just another LLM model; it’s like giving your computer superpowers! Let me break it down for you in simple terms. So, whats the big deal with Grok-1.5V? Well, imagine a computer program that can understand not only text but also pictures, diagrams, charts, and even photos you take. Cool, right? Grok-1.5V isn t just a jack-of-all-trades; it is a master of many. It can handle all sorts of tasks, from understanding documents and science stuff to analyzing screenshots and real life photographs. It is like having a super-smart buddy who can help you make sense of the world around you. One of the coolest things about Grok-1.5V is its RealWorldQA benchmark what I found is vary interesting and powerfull. Sounds fancy, but it’s actually pretty straightforward. It’s like a test for AI to see how well it understands real-world stuff. And guess what? Grok-1.5V aces it! It’s great at understanding the world just like we do check on videos of demo on link below. And the best part? You can get in on the action too! You can download the RealWorldQA dataset and see for yourself how Grok-1.5V tackles real-world challenges. It’s like peeking behind the curtain of AI magic. But wait, there’s more! The folks behind Grok-1.5V are constantly working to make it even better. They’re not stopping here; they’re pushing the boundaries of what AI can do. So, who knows what amazing things Grok-1.5V will be able to do in the future? In a nutshell, Grok-1.5V is like having a super-smart friend who can understand the world in ways we never thought possible. So, why not give it a try? Who knows what incredible things you’ll discover with Grok-1.5V by your side! hashtag#LLM hashtag#Grok-1.5V hashtag#Grok hashtag#X hashtag#LLMRace hashtag#ElonMusk hashtag#MultiModel hashtag#DeepLearning hashtag#AI hashtag#DataScience",
    },
  ];

  return (
    <DefaultLayout>
      <div className="empty-div" style={{ width: '80%', marginLeft: '10%'}}>
        <div className="blogs-page">
          <h1
            className="gradient-text header-container bold"
            style={{ paddingTop: "25px", paddingBottom: "25px" }}
          >
            Blogs
          </h1>
          <div className="blogs-list">
            {blogs.map((blog) => (
              <Blog
                key={blog.id}
                title={blog.title}
                date={blog.date}
                author={blog.author}
                content={blog.content}
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BlogsPage;
