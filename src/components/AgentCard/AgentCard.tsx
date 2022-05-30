/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AgentCardProps } from "./AgentCard.types";

export function AgentCard(props: AgentCardProps) {
  const {
    bustPortrait,
    displayName,
    abilities,
    description,
    displayIcon,
    role,
  } = props;

  return (
    <>
      {/* mobile */}
      <Link href={`/agents/${displayName}`}>
        <a>
          <div className="tablet:hidden sm:flex flex-column w-full h-[240px] border-2 items-center border-brand-500 px-3 shadow-md shadow-brand-300">
            <div className="flex flex-col">
              <img
                src={displayIcon}
                alt={displayName}
                className="w-[100px] h-[170px] object-cover mb-3 mt-6"
              />
            </div>

            <div className="flex flex-col w-[250px] px-5">
              <p className="text-lg font-bold">{displayName}</p>
              <p className="text-sm text-justify">
                {description.substring(0, 150)}...
              </p>
            </div>
          </div>
        </a>
      </Link>

      {/* Tablet */}

      <div className="laptop:hidden sm:hidden tablet:flex flex-row w-full h-[240px] border-2 items-center border-brand-500 px-3">
        <div className="flex flex-col">
          <img
            src={displayIcon}
            alt={displayName}
            className="w-[100px] h-[170px] object-cover mb-3 mt-6"
          />
        </div>

        <div className="flex flex-col w-[250px] px-5">
          <p className="text-lg font-bold">{displayName}</p>
          <p className="text-sm text-justify">
            {description.substring(0, 150)}...
          </p>
        </div>
      </div>

      {/* Desktop */}
      <Link href={`/agents/${displayName}`}>
        <a>
          <div className="hidden laptop:flex w-[450px] h-[240px] border-2 border-brand-500 items-center justify-items-center flex-row ">
            <div className="w-[200px] flex flex-col items-center justify-between py-10">
              <p className="text-2xl font-bold">{displayName}</p>
              <p>{role.displayName}</p>
              <img
                className="h-20 w-20 bg-slate-900"
                src={role.displayIcon}
                alt={role.displayName}
              />
              <p className="text-center text-sm">{role.description}</p>
            </div>

            <img
              className="h-60 w-35 grayscale hover:grayscale-0 hover:scale-125 delay-200"
              src={bustPortrait}
              alt={displayName}
            />
          </div>
        </a>
      </Link>
    </>
  );
}
