import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Avatar />
      <div className="data">
        <About />
        {}
        <SkillsList />
      </div>
    </div>
  );
}

const Avatar = () => (
  <img
    src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/11/92569.jpg"
    alt="Abdul Hamid"
    className="img-main"
  />
);

const About = () => {
  return (
    <div>
      <h1>Sultan Abdul Hamid</h1>
      <p>
        Sultan Abdülhamid II ruled the Ottoman Empire from 1876-1909. Known for
        modernization efforts and harsh suppression of dissent, he faced
        internal and external challenges that weakened the empire. Dethroned in
        1909, he remains a complex figure, criticized for autocracy but praised
        for attempted modernization.
      </p>
    </div>
  );
};

const SkillsList = () => {
  return (
    <div className="skill-list">
      <Skill skill="Military Strategy" emoji={"\uD83D\uDCAA"} color="blue" />
      <Skill skill="Political Acumen" emoji={"\uD83D\uDCAA"} color="green" />
      <Skill
        skill="Administrative Skills"
        emoji={"\uD83D\uDCAA"}
        color="yellow"
      />
      <Skill skill="Modernization" emoji={"\uD83D\uDCAA"} color="#755211" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};
