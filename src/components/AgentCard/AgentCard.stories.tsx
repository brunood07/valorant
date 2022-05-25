import { AgentCard } from "./AgentCard";
import { AgentCardProps } from "./AgentCard.types";

export const Card = (props: AgentCardProps) => <AgentCard {...props} />;

Card.args = {
  displayName: "Fade",
  bustPortrait:
    "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/bustportrait.png",
  displayIcon:
    "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
  description:
    "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
  role: {
    displayName: "Initiator",
    description:
      "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
    displayIcon:
      "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
  },
};

export default {
  title: "Components/AgentCard",
  component: AgentCard,
};
