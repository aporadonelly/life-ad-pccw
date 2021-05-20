import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import React from "react";

const EnhancedTableHead = (props) => {
  const { classes, orderDirection, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          key="docType"
          classes={{
            head: classes.tableHeaderRoot,
            sizeSmall: classes.tableHeadAlign,
          }}
        >
          <TableSortLabel
            classes={{
              icon:
                orderBy === "documentType"
                  ? classes.activeSortIcon
                  : classes.inActiveSortIcon,
            }}
            active={orderBy === "documentType"}
            direction={orderBy === "documentType" ? orderDirection : "desc"}
            onClick={createSortHandler("documentType")}
          >
            Document Type
          </TableSortLabel>
        </TableCell>
        <TableCell
          classes={{ head: classes.tableHeaderRoot }}
          key="submittedBy"
        >
          <TableSortLabel
            classes={{
              icon:
                orderBy === "submittedBy"
                  ? classes.activeSortIcon
                  : classes.inActiveSortIcon,
            }}
            active={orderBy === "submittedBy"}
            direction={orderBy === "submittedBy" ? orderDirection : "desc"}
            onClick={createSortHandler("submittedBy")}
          >
            Submitted by
          </TableSortLabel>
        </TableCell>
        <TableCell
          classes={{ head: classes.tableHeaderRoot }}
          key="receivedDate"
          //  sortDirection={orderBy === 'receivedDate' ? orderDirection : false}
        >
          <TableSortLabel
            classes={{
              icon:
                orderBy === "receivedDate"
                  ? classes.activeSortIcon
                  : classes.inActiveSortIcon,
            }}
            active={orderBy === "receivedDate"}
            direction={orderBy === "receivedDate" ? orderDirection : "desc"}
            onClick={createSortHandler("receivedDate")}
          >
            Received Date
          </TableSortLabel>
        </TableCell>
        <TableCell
          classes={{ head: classes.tableHeaderRoot }}
          key="status"
          //  sortDirection={orderBy === 'status' ? orderDirection : false}
        >
          <TableSortLabel
            classes={{
              icon:
                orderBy === "status"
                  ? classes.activeSortIcon
                  : classes.inActiveSortIcon,
            }}
            active={orderBy === "status"}
            direction={orderBy === "status" ? orderDirection : "desc"}
            onClick={createSortHandler("status")}
          >
            Status
          </TableSortLabel>
        </TableCell>
        <TableCell
          classes={{ root: classes.alignAction, head: classes.tableHeaderRoot }}
          key="action"
          align="right"
        >
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  orderDirection: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead;
