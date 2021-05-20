import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { labels } from '../../../common/labels';

const EnhancedTableHead = (props) => {
  const { classes, orderDirection, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell
          key="lastNameEng"
          classes={{ sizeSmall: classes.tableHeadAlign }}
        >
          <TableSortLabel
            classes={{
              icon: ((orderBy === "lastNameEng") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "lastNameEng"}
            direction={orderBy === "lastNameEng" ? orderDirection : 'desc'}
            onClick={createSortHandler('lastNameEng')}
          >{labels.lastNameEng}</TableSortLabel>
        </TableCell>
        <TableCell key="firstNameEng">
          <TableSortLabel
            classes={{
              icon: ((orderBy === "firstNameEng") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "firstNameEng"}
            direction={orderBy === "firstNameEng" ? orderDirection : 'desc'}
            onClick={createSortHandler('firstNameEng')}
          >{labels.firstNameEng}</TableSortLabel>
        </TableCell>
        <TableCell
          key="lastNameChi"
        //  sortDirection={orderBy === 'lastNameChi' ? orderDirection : false} 
        >
          <TableSortLabel
            classes={{
              icon: ((orderBy === "lastNameChi") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "lastNameChi"}
            direction={orderBy === "lastNameChi" ? orderDirection : 'desc'}
            onClick={createSortHandler('lastNameChi')}
          >{labels.lastNameChi}</TableSortLabel>
        </TableCell>
        <TableCell
          key="firstNameChi"
        //  sortDirection={orderBy === 'firstNameChi' ? orderDirection : false}  
        >
          <TableSortLabel
            classes={{
              icon: ((orderBy === "firstNameChi") ? classes.activeSortIcon : classes.inActiveSortIcon)
            }}
            active={orderBy === "firstNameChi"}
            direction={orderBy === "firstNameChi" ? orderDirection : 'desc'}
            onClick={createSortHandler('firstNameChi')}
          >{labels.firstNameChi}</TableSortLabel>
        </TableCell>
        <TableCell classes={{ root: classes.alignAction }} key="action" align="right">{labels.view}</TableCell>
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