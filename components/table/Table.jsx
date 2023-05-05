"use client";

import React, { useState } from "react";
import { columnsData, data } from "./sampleData";
import { Table } from "antd";

const TableComponent = () => {
  const [Data, setData] = useState(data);
  return (
    <>
      <div className="app">
        <div className="table">
          <Table dataSource={Data} columns={columnsData} pagination={false} />
        </div>
      </div>
    </>
  );
};

export default TableComponent;
