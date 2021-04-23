import React, { useState } from 'react';
import api from './employees/api/employees';
import { useHistory } from 'react-router-dom';

export function useForm(initialValues, validateOnchange = false, validate) {
  const history = useHistory();
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (validateOnchange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const searchAllUsers = async (gender, id_type) => {
    if (gender === '' && id_type === '') {
      const res = await api.get('/employees');
      console.log(res.data, 'value');
      history.push('/employee-search-results');
      return res.data;
    } else console.log(id_type, gender, 'value'); 
  };

  return {
    searchAllUsers,
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return (
    <form autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
