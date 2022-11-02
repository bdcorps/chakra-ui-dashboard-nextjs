import { ColumnDef } from "@tanstack/react-table";
import { FunctionComponent } from "react";

import { DataTable } from "./DataTable";

interface TableProps {
  columns: ColumnDef<any, any>[];
  data: { name: string; message: string }[];
}

const Table: FunctionComponent<TableProps> = ({
  columns,
  data,
}: TableProps) => {
  return <DataTable columns={columns} data={data} />;
};

export default Table;
