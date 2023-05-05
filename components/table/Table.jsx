"use client";

import { columnsData } from "./columnsData";
import { Table } from "antd";
import { useQuery } from "@apollo/client";
import { CHECK_IN } from "./graphQL";
import formatDate from "@/utils/formatDate";

const TableComponent = () => {
  const { loading, error, data } = useQuery(CHECK_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const check__ins = formatDate(data.check_in);

  return (
    <>
      <div className="app">
        <div className="table">
          <Table
            dataSource={check__ins}
            columns={columnsData}
            pagination={true}
            rowKey={"id"}
            rowSelection={""}
          />
        </div>
      </div>
    </>
  );
};

async function fetch() {}

export default TableComponent;
