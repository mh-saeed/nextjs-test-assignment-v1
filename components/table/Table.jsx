"use client";
import { useQuery } from "@apollo/client";
import { CHECK_IN } from "./graphQL";
import formatDate from "@/utils/formatDate";
import ExpensiveTable from "./ExpensiveTable";

const TableComponent = () => {
  const { loading, error, data } = useQuery(CHECK_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const check__ins = formatDate(data.check_in);

  return (
    <>
      <div className="app">
        <div className="table">
          <ExpensiveTable data={check__ins} />
          {console.log("inside render")}
        </div>
      </div>
    </>
  );
};

async function fetch() {}

export default TableComponent;
