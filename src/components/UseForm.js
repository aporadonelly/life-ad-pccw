import React, { useState } from 'react';
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

  return {
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
