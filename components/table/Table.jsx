"use client";

import { useQuery } from "@apollo/client";
import { CHECK_IN } from "./queries";
import ExpensiveTable from "./MemoizedTable";

const TableComponent = () => {
  const { loading, error, data } = useQuery(CHECK_IN);

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

function getColumnData() {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];
}

export default TableComponent;
