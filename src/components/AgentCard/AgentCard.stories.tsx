import { AgentCard } from "./AgentCard";

import { AgentCardProps } from "./AgentCard.types";

export const Card = (props: AgentCardProps) => <AgentCard {...props} />;

Card.args = {
  displayName: "Agent Card",
  bustPortrait:
    "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
};

export default {
  title: "Components/AgentCard",
  component: AgentCard,
};
