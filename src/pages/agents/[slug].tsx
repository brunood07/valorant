/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

import { Header } from "../../components/Header";

import { api } from "../../services/api";

export interface AgentData {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  bustPortrait: string;
  background: string;
  isPlayableCharacter: boolean;
  role: { displayName: string; description: string; roleIcon: string };
  abilities: {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  };
}

export default function Agent(props: AgentData) {
  const {
    abilities,
    background,
    bustPortrait,
    description,
    displayIcon,
    displayName,
    role,
  } = props;
  const [language, setLanguage] = useState("pt-BR" || "en-US" || "es-ES");

  const handleLangChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <>
      <Header onChangeLangage={handleLangChange} />
      <div className="sm:flex flex-col tablet:hidden w-screen items-center justify-center mt-4">
        <h1 className="text-4xl font-bold">{displayName}</h1>
        <img
          src={displayIcon}
          alt={displayName}
          className="w-[150px] h-[150px] border-2 border-slate-900 mt-4"
        />
        <section className="px-6 mt-4 text-justify">{description}</section>

        <p>{role.displayName}</p>
        <img
          src={role.roleIcon}
          alt={role.displayName}
          className="w-[150px] h-[150px] border-2 border-slate-900 mt-4"
        />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get(
    "/agents?isPlayableCharacter=true&language=pt-BR"
  );

  const agents = data.data as AgentData[];

  const paths = agents.map((agent) => ({
    params: {
      slug: agent.uuid,
      displayName: agent.displayName,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const { data } = await api.get(
    "/agents?isPlayableCharacter=true&language=pt-BR"
  );

  const agents = data.data as AgentData[];

  const agent = agents.find((agent: AgentData) => agent.uuid === slug);

  console.log(agent);

  const {
    displayName,
    abilities,
    background,
    bustPortrait,
    displayIcon,
    description,
    role,
  } = agent as AgentData;

  return {
    props: {
      displayName,
      bustPortrait,
      displayIcon,
      description,
      role: {
        roleIcon: role.displayIcon,
        roleDescription: role.description,
        roleDisplayName: role.displayName,
      },
    },
  };
};
