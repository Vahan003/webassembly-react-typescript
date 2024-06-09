import React from "react";
import { useLoadWasm } from "../use-load-wasm";
import { Home } from "./modules/Home";

export const WasmContext = React.createContext(null);

export const App: React.FC = () => {
  const { main: wasmMethods } = useLoadWasm();

  return (
    <WasmContext.Provider value={wasmMethods}>
      <Home />
    </WasmContext.Provider>
  );
};
