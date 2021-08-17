import { useMemo } from "react";
import { useStyles } from "./styles";
import { DataTable } from "@components/common";

const VestingList = () => {
  const classes = useStyles();

  const columns = useMemo(
    () => [
      {
        Header: "Completed Years of Service",
        headerProps: {
          className: classes.header,
        },
        accessor: "name",
        cellProps: {
          className: classes.cell,
        },
      },
      {
        Header: "Vested Percentage (%)",
        headerProps: {
          className: classes.header,
        },
        accessor: "name2",
        cellProps: {
          className: classes.cell,
        },
      },
    ],
    [classes.cell, classes.header]
  );

  return (
    <DataTable
      striped
      columns={columns}
      data={[
        {
          name: 1,
          name2: 2,
        },
        {
          name: 1,
          name2: 2,
        },
        {
          name: 1,
          name2: 2,
        },
        {
          name: 1,
          name2: 2,
        },
        {
          name: 1,
          name2: 2,
        },
        {
          name: 1,
          name2: 2,
        },
      ]}
      tableProps={{
        size: "small",
      }}
      disableQuickSearch
      disablePagination
      disableShowEntries
    />
  );
};

export default VestingList;
