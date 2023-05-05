"use client";

import { useQuery } from "@apollo/client";
import { GET_CHECK_IN } from "./queries";
import ExpensiveTable from "./MemoizedTable";

const TableComponent = () => {
  const { loading, error, data } = useQuery(GET_CHECK_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const columnsData = () => getColumnData();

  return (
    <>
      <div className="app">
        <div className="table">
          <ExpensiveTable rowData={data} columnsData={columnsData} />
        </div>
      </div>
    </>
  );
};

// styles for checkedIn(Status) column

const statusStyle = {
  background: "green",
  background: "#000000D9",
  background: "#79FFE1",
  borderRadius: " 2px",
  border: "1px solid #F0F0F0",
  height: "24px",
  width: "97px",
  padding: "1px 6px 1px 6px",
  fontSize: "14px",
  lineHeight: "22px",
};

function getColumnData() {
  return [
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      render: (text, record) => {
        return record.owner ? record.owner : "mh-saeed";
      },
    },
    {
      title: "Status",
      dataIndex: "status" || "M. Saeed",
      key: "status",
      render: (text, record) => {
        statusStyle;
        return <span style={statusStyle}>CHECKED IN</span>;
      },
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];
}

export default TableComponent;
