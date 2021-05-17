import React, { useState } from 'react'

export function useForm(initialValues, validateOnchange = false, validate) {
	const [values, setValues] = useState(initialValues)

	const [errors, setErrors] = useState({})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })

		if (validateOnchange) validate({ [name]: value })
	}

	const resetForm = () => {
		setValues(initialValues)
		setErrors({})
	}

	return {
		values,
		setValues,
		handleInputChange,
		errors,
		setErrors,
		resetForm,
	}
}

export function Form(props) {
	const { children, ...other } = props
	return (
		<form autoComplete='off' {...other}>
			{props.children}
		</form>
	)
}
