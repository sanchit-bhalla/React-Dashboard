import React from "react";

import {
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-charts";
import { KanbanComponent } from "@syncfusion/ej2-react-kanban";
import { kanbanGrid, kanbanData } from "../data/dummy";
import { Header } from "../components";
const Kanban = () => {
  return (
    <div className="m2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />

      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        keyField="Status"
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
