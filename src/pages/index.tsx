import type { NextPage } from "next";
import { useEffect } from "react";
import { AgentCard } from "../components/AgentCard";
import { Header } from "../components/Header";
import useAgents from "../hooks/useAgents";

const Home: NextPage = () => {
  const { fetchAgents, agents } = useAgents();

  useEffect(() => {
    fetchAgents();
  }, []);

  console.log(agents);

  return (
    <>
      <Header logoImg={""} />
      <div className="grid grid-cols-4 w-full h-full items-center justify-between px-4 py-4">
        {agents.map((item, index) => (
          <div key={index}>
            <AgentCard
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
        {/* <AgentCard
          displayName={"Fade"}
          description={""}
          displayIcon={""}
          bustPortrait={
            "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/bustportrait.png"
          }
          background={""}
          role={{
            displayName: "Initiator",
            description:
              "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
            displayIcon:
              "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
          }}
          abilities={{
            slot: "",
            displayName: "",
            description: "",
            displayIcon: "",
          }}
        /> */}
      </div>
    </>
  );
};
export default Home;
