import { useContext } from "react";
import { ProductSelectorStatesContext } from "../state-management/context";

export const useSelectorStates = () => {
  return useContext(ProductSelectorStatesContext);
};
