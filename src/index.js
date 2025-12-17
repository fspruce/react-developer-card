import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const emojis = {
  strong: "strong",
  good: "good",
  learning: "learning",
};

const developerData = [
  {
    id: 1,
    name: "Fintan Spruce",
    description:
      "Junior full-stack developer, looking to break into the tech industry. When not coding or learning new things, I like to play videogames, cook great food, and watch copious amounts of Doctor Who!",
    image: "/fintan.jpg",
    skillset: [
      ["HTML", emojis.strong],
      ["CSS", emojis.strong],
      ["Python", emojis.good],
      ["Git and GitHub", emojis.strong],
      ["React", emojis.learning],
      ["C#", emojis.learning],
    ],
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
        <Intro name={data.name} description={data.description} />
        {/* 
        Should contain one Skill component for each
        web dev skill that you have, customised with
        props.
        */}
        <SkillList skillset={data.skillset} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.imageSrc} alt={props.altText} className="avatar" />;
}

function Intro(props) {
  return (
    <main>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </main>
  );
}

function SkillList(props) {
  const listComponents = [];

  props.skillset.forEach((skill) => {
    listComponents.push(
      <SkillItem key={skill} text={skill[0]} emoji={skill[1]} />
    );
  });

  return <div className="skill-list">{listComponents}</div>;
}

function SkillItem(props) {
  let emoji = "";
  if (props.emoji === "strong") {
    emoji = "💪";
  } else if (props.emoji === "good") {
    emoji = "👍";
  } else if (props.emoji === "learning") {
    emoji = "🎓";
  } else {
    emoji = "NaN";
  }
  const className = `skill ${props.emoji}`;
  return (
    <span className={className}>
      {props.text} {emoji}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function getDeveloper(id) {
  return developerData.filter((dev) => dev.id === id)[0];
}
