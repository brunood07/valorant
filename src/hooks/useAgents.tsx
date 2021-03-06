import { useState } from "react";
import { api } from "../services/api";

export interface AgentsData {
  uuid: string;
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

export default function useAgents() {
  const [agents, setAgents] = useState<AgentsData[]>([] as AgentsData[]);

  async function fetchAgents(lang = "pt-BR") {
    await api
      .get(`/agents?isPlayableCharacter=true&language=${lang}`)
      .then((res) => {
        const agentsAUX = res.data.data;

        console.log(agentsAUX);
        setAgents(agentsAUX);
      });
  }

  return { agents, fetchAgents };
}
