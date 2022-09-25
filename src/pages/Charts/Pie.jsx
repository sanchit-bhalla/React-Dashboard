import React from "react";

import { pieChartData } from "../../data/dummy";
import { Header, Pie as PieChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();
  const darkModecolor = currentMode === "Dark" ? "white" : "";

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Pie"
        title="Project Cost Breakdown"
        color={darkModecolor}
      />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;
