import React, { useState } from "react";
import styles from "./table.module.css";
import { Table } from "antd";
import { columnsData } from "./columnsData";
import DrawerComponent from "../drawer/Drawer";

const ExpensiveTable = ({ data }) => {
  console.log(data);
  const [visible, setVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  const handleRowClick = (record) => {
    setSelectedRowData(record);
    setVisible(true);
    console.log("Clicked row:", record);
  };

  const onClose = () => setVisible(false);
  const rowClassName = () => `${styles.clickableRow}`;

  return (
    <>
      <Table
        className={styles.table}
        dataSource={data}
        columns={columnsData}
        rowKey={"id"}
        pagination={{ pageSize: 10 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => handleRowClick(record),
            className: rowClassName(),
          };
        }}
      />

      {console.log("expensive rendered")}

      <DrawerComponent
        data={selectedRowData}
        title={`Details for ${selectedRowData.name}`}
        open={visible}
        onClose={onClose}
      />
    </>
  );
};

export default React.memo(ExpensiveTable);
