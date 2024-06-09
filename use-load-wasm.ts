import React from "react";
const wasmModule = module.require("./src/wasm/main_wasm");

export const useLoadWasm = () => {
  const [main, setMain] = React.useState();

  const loadModule = async () => {
    try {
      const result = await wasmModule.default();
      setMain(result);
    } catch (err) {
      throw new Error(err);
    }
  };

  React.useEffect(() => {
    loadModule();
  }, []);

  return { main } as any;
};
