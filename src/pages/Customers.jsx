import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Filter,
  Selection,
  Toolbar,
  Edit,
  Sort,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="mt-14 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Edit, Selection, Filter, Sort, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
