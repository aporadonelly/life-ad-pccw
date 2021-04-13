import React, { useState } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const handleGenderChange = event => {
  //   const { value } = event.target;

  //   setValues({ gender: value });
  // };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form(props) {
  return <form>{props.children}</form>;
}
