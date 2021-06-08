import React from 'react';
import { PropTypes } from 'prop-types';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const EnhancedTableHead = (props) => {
  const { classes, orderDirection, orderBy, onRequestSort } = props;
  const { t } = useTranslation(["table"]);

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell
          key="lastName"
          classes={{ sizeSmall: classes.tableHeadAlign }}
        >
          <TableSortLabel
            classes={{
              icon: ((orderBy === "lastName") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "lastName"}
            direction={orderBy === "lastName" ? orderDirection : 'desc'}
            onClick={createSortHandler('lastName')}
          >{t("table:thead.lastName")}</TableSortLabel>
        </TableCell>
        <TableCell key="firstName">
          <TableSortLabel
            classes={{
              icon: ((orderBy === "firstName") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "firstName"}
            direction={orderBy === "firstName" ? orderDirection : 'desc'}
            onClick={createSortHandler('firstName')}
          >{t("table:thead.firstName")}</TableSortLabel>
        </TableCell>
        <TableCell
          key="chineseLastName"
        >
          <TableSortLabel
            classes={{
              icon: ((orderBy === "chineseLastName") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "chineseLastName"}
            direction={orderBy === "chineseLastName" ? orderDirection : 'desc'}
            onClick={createSortHandler('chineseLastName')}
          >{t("table:thead.chineseLastName")}</TableSortLabel>
        </TableCell>
        <TableCell
          key="chineseFirstName"
        >
          <TableSortLabel
            classes={{
              icon: ((orderBy === "chineseFirstName") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "chineseFirstName"}
            direction={orderBy === "chineseFirstName" ? orderDirection : 'desc'}
            onClick={createSortHandler('chineseFirstName')}
          >{t("table:thead.chineseFirstName")}</TableSortLabel>
        </TableCell>
        <TableCell key="view" align="right" >{t("table:thead.viewAction")}</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  orderDirection: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead;