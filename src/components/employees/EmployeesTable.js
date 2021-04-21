import { TableBody } from '@material-ui/core';
import useTable from '../../pages/employees/useTable';

const EmployeesTable = ({ employees }) => {
  const { TblContainer } = useTable;
  return (
    <div className="blog-list">
      <TblContainer>
        {/* <TableBody>{employees.map(emp => console.log(emp))}</TableBody> */}
      </TblContainer>
    </div>
  );
};

export default EmployeesTable;
