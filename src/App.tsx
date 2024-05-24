import "./App.css";
import React from "react";
import { OseClientProvider } from "./views";
import { Routes } from "./views/Routes";
import { MetaMaskContextProvider } from "./hooks";
import { MoonPayProvider } from "@moonpay/moonpay-react";

const App = () => {
  return (
    <MoonPayProvider apiKey={process.env.MOONPAY_API_KEY || ""} debug>
      <MetaMaskContextProvider>
        <OseClientProvider>
          <Routes />
        </OseClientProvider>
      </MetaMaskContextProvider>
    </MoonPayProvider>
  );
};

export default App;
