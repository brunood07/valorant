import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { api } from "../services/api";

interface AgentData {
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

type AgentContextData = {
  agents: AgentData[];
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  fetchAgents: (lang: string) => void;
  handleChangeLang: (lang: string) => void;
};

export const AgentsContext = createContext({} as AgentContextData);

type AgentsContextProviderData = {
  children: ReactNode;
};

export function AgentsContextProvider({ children }: AgentsContextProviderData) {
  const [agents, setAgents] = useState<AgentData[]>([] as AgentData[]);
  const [lang, setLang] = useState("pt-BR");

  async function fetchAgents(lang = "pt-BR") {
    await api
      .get(`/agents?isPlayableCharacter=true&language=${lang}`)
      .then((res) => {
        const agentsAUX = res.data.data;

        console.log(agentsAUX);
        setAgents(agentsAUX);
      });
  }

  function handleChangeLang(lang: string) {
    localStorage.setItem("lang", lang);
    setLang(lang);
  }

  return (
    <AgentsContext.Provider
      value={{ agents, lang, setLang, fetchAgents, handleChangeLang }}
    >
      {children}
    </AgentsContext.Provider>
  );
}
