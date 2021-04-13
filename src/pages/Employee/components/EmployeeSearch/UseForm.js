import React, { useState } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(value, 'value');
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('Searching...', e.target.value, 'value');
  };

  return {
    values,
    setValues,
    handleInputChange,
    onSubmit,
  };
}

export function Form(props) {
  return <form autoComplete="off">{props.children}</form>;
}
