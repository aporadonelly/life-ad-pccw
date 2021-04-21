import React from 'react';
import { TableBody, TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import useTable from '../../pages/employees/useTable';

const headCells = [
  { id: 'mpf_id', label: 'MPF ID' },
  { id: 'member_name', label: 'Member Name' },
  { id: 'id_type', label: 'ID Type' },
  { id: 'it_number', label: 'ID Number' },
  { id: 'mobile_number', label: 'Mobile Number' },
  { id: 'email', label: 'Email' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action' },
];
export default function EmployeesTable(props) {
  const { employees } = props;
  const { TblContainer, TblHead } = useTable(employees, headCells);
  return (
    <>
      <TblContainer>
        <TblHead />
        <TableBody>
          {employees.map(emp => (
            <TableRow key={emp.id}>
              <TableCell>{emp.mpf_id}</TableCell>
              <TableCell>
                {emp.first_name} {''}
                {emp.last_name}
              </TableCell>
              <TableCell>{emp.id_type}</TableCell>
              <TableCell>{emp.id_number}</TableCell>
              <TableCell>{emp.mobile_number}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.status}</TableCell>
              <TableCell> R E</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </>
  );
}
