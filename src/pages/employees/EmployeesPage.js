/**
 * @Name Member Enquiry Page
 * @Description A page where admin can search members.
 * @parameters all fields in searchform component
 * @returns a list of members shown in the table
 * @Author Nelly
 * @UpdatedBy Nelly
 */

import React from 'react';
import SearchForm from '../../components/employees/EmployeesSearchForm';

const Employees = () => {
  return (
    <>
      <SearchForm />
    </>
  );
};

export default Employees;
