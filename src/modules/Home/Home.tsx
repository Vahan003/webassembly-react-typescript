import React from "react";
import { WasmContext } from "../../app";

export const Home: React.FC = () => {
  const wasmMethods = React.useContext(WasmContext);

  console.log("adder(2, 4) = ", wasmMethods?._adder(2, 4));
  console.log("power(2, 4) =", wasmMethods?._power(2, 4));
  console.log("main() =", wasmMethods?._main());

  return <></>;
};
