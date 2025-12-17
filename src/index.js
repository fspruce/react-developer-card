import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const developerData = [
  {
    name: "Fintan Spruce",
    description:
      "Junior full-stack developer, looking to break into the tech industry. When not coding or learning new things, I like to play videogames, cook great food, and watch copious amounts of Doctor Who!",
    image: "/fintan.jpg",
    skillset: ["HTML", "CSS", "Python", "Git and GitHub", "React", "C#"],
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* 
        Should contain one Skill component for each
        web dev skill that you have, customised with
        props.
        */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {}

function Intro() {}

function SkillList() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
