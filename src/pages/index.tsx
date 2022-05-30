import type { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header onChangeLangage={() => null} />
      <h1>Home</h1>
    </>
  );
};

export default Home;
