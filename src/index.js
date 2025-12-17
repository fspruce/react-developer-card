import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const developerData = [
  {
    id: 1,
    name: "Fintan Spruce",
    description:
      "Junior full-stack developer, looking to break into the tech industry. When not coding or learning new things, I like to play videogames, cook great food, and watch copious amounts of Doctor Who!",
    image: "/fintan.jpg",
    skillset: ["HTML", "CSS", "Python", "Git and GitHub", "React", "C#"],
  },
];

function App() {
  const data = getDeveloper(1);
  return <Card data={data} />;
}

function Card(props) {
  const data = props.data;
  return (
    <div className="card">
      <Avatar imageSrc={data.image} altText={data.name} />
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

function Avatar(props) {
  return <img src={props.imageSrc} alt={props.altText} className="avatar" />;
}

function Intro() {}

function SkillList() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function getDeveloper(id) {
  return developerData.filter((dev) => dev.id === id)[0];
}
