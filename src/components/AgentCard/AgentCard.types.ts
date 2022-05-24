export interface AgentCardProps {
  displayName: string;
  description: string;
  displayIcon: string;
  bustPortrait: string;
  background: string;
  isPlayableCharacter: boolean;
  role: { displayName: string; description: string; displayIcon: string };
  abilities: {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  };
}
