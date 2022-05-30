import { useEffect, useState } from "react";
import { AgentCard } from "../../components/AgentCard";
import { Header } from "../../components/Header";
import useAgents from "../../hooks/useAgents";

export default function Agents() {
  const [language, setLanguage] = useState("pt-BR" || "en-US" || "es-ES");
  const { fetchAgents, agents } = useAgents();

  useEffect(() => {
    fetchAgents(language);
  }, [language]);

  const handleLangChange = (lang: string) => {
    setLanguage(lang);
  };

  console.log(agents);

  return (
    <>
      <Header onChangeLangage={handleLangChange} />
      <div className="grid sm-grid-cols-1 laptop:grid-cols-4 w-full h-full items-center justify-between sm:justify-center px-4 py-4">
        {agents.map((item, index) => (
          <div key={index} className="m-0 sm:my-2">
            <AgentCard
              uuid={item.uuid}
              displayName={item.displayName}
              description={item.description}
              displayIcon={item.displayIcon}
              bustPortrait={item.bustPortrait}
              role={{
                displayName: item.role.displayName,
                description: item.role.description,
                displayIcon: item.role.displayIcon,
              }}
              abilities={{
                slot: item.abilities.slot,
                displayName: item.abilities.displayName,
                description: item.abilities.description,
                displayIcon: item.abilities.displayIcon,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
