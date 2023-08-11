import BubbleAnimation from "../components/Elements/Bubble";
import { SkillCard } from "../components/Fragments/SkillCard";

export const SkillsPage = () => {
  const pinkBubble = {
    x: ["-25%", "25%", "-25%"],
    y: ["-25%", "25%", "-25%"],
  };
  const yellowBubble = {
    x: ["0%", "100%", "0%"],
  };
  const pinkStyle = {
    top: "20%",
    left: "20%",
    transform: "translate(-50%, -50%)",
  };
  const yellowStyle = {
    top: "20%",
    left: "20%",
    transform: "translate(-50%, -50%)",
  };
  const pinkColor = "#ffa291";
  const yellowColor = "#f1f58c";

  return (
    <div>
      {/* <BubbleAnimation
        animate={pinkBubble}
        style={pinkStyle}
        color={pinkColor}
      />
      <BubbleAnimation
        animate={yellowBubble}
        style={yellowStyle}
        color={yellowColor}
      /> */}
      <SkillCard />
    </div>
  );
};
