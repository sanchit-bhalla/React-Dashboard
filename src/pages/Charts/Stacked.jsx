import React from "react";

import { Header, Stacked as StackedChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = () => {
  const { currentMode } = useStateContext();
  const darkModecolor = currentMode === "Dark" ? "white" : "";

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Stacked"
        title="Revenue Breakdown"
        color={darkModecolor}
      />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
