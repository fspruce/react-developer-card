import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const devData = [
  {
    id: 1,
    name: "Fintan Spruce",
    description:
      "Junior full-stack developer, looking to break into the tech industry. When not coding or learning new things, I like to play videogames, cook great food, and watch copious amounts of Doctor Who!",
    image: "dev-images/fintan.jpg",
    skillset: [
      ["HTML", "strong"],
      ["CSS", "strong"],
      ["JavaScript", "strong"],
      ["Git and GitHub", "good"],
      ["React", "learning"],
      ["C#", "learning"],
    ],
  },
  {
    id: 2,
    name: "Robbie Williams",
    description: "Musician turned developer, looking to have an ape of a time!",
    image: "dev-images/blonde_robbie_monkey.png",
    skillset: [
      ["Python", "strong"],
      ["C++", "strong"],
      ["Git and GitHub", "strong"],
      ["Django", "good"],
      ["SQL", "learning"],
    ],
  },
  {
    id: 3,
    name: "John Lennon",
    description:
      "Musician turned developer, inspired by the story of Robbie. Once a member of the largest band of all time, now working with computers. We made the way with apple, how much more difficult could it be?",
    image: "dev-images/john-lennon.png",
    skillset: [
      ["BASIC", "strong"],
      ["FORTRAN", "good"],
      ["COBOL", "good"],
      ["Pascal", "learning"],
      ["C", "learning"],
    ],
  },
];

function App() {
  const cards = [];
  devData.forEach((dev) => cards.push(<Card key={dev.id} data={dev} />));
  return <div className="cards-container">{cards}</div>;
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

// Use function if specific filtering of developers is required before displaying the cards.
// function getDev(id) {
//   return devData.filter((dev) => dev.id === id)[0];
// }
