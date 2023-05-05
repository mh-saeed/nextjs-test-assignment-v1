import React, { useState, useMemo } from "react";
import styles from "./table.module.css";
import { Table } from "antd";
import DrawerComponent from "../drawer/Drawer";
import formatDate from "@/utils/formatDate";

const MemoizedTable = ({ rowData, columnsData }) => {
  const [visible, setVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  const handleRowClick = (record) => {
    setSelectedRowData(record);
    setVisible(true);
  };

  const onClose = () => setVisible(false);
  const rowClassName = () => `${styles.clickableRow}`;

  const check__ins = useMemo(() => {
    return formatDate(rowData.check_in);
  }, [rowData]);

  return (
    <>
      <Table
        className={styles.table}
        dataSource={check__ins}
        columns={columnsData()}
        rowKey={"id"}
        pagination={{ pageSize: 10 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => handleRowClick(record),
            className: rowClassName(),
          };
        }}
      />
      <DrawerComponent
        data={selectedRowData}
        title={`Details for ${selectedRowData.name}`}
        open={visible}
        onClose={onClose}
      />
    </>
  );
};

export default MemoizedTable;
