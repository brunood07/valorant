import { useEffect, useState, useContext } from "react";
import { AgentCard } from "../../components/AgentCard";
import { Header } from "../../components/Header";
import { AgentsContext } from "../../context/AgentContext";
import useAgents from "../../hooks/useAgents";

export default function Agents() {
  const { agents, lang, setLang, fetchAgents } = useContext(AgentsContext);

  useEffect(() => {
    fetchAgents(lang);
  }, [lang]);

  const handleLangChange = (lang: string) => {
    setLang(lang);
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
function AgentContext(AgentContext: any): {} {
  throw new Error("Function not implemented.");
}
