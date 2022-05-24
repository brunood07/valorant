import { AgentCardProps } from "./AgentCard.types";

export function AgentCard(props: AgentCardProps) {
  const { bustPortrait, displayName } = props;

  return (
    <div>
      <img className="h-20 w-20" src={bustPortrait} alt={displayName} />
    </div>
  );
}
