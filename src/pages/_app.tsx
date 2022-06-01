import type { AppProps } from "next/app";
import { AgentsContextProvider } from "../context/AgentContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AgentsContextProvider>
      <Component {...pageProps} />
    </AgentsContextProvider>
  );
}

export default MyApp;
