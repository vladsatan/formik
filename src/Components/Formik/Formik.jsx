import React from 'react';
import "./Formik.css"
import { Formik, ErrorMessage } from 'formik';

const FormComponent = () => {
    return (
        <div className='formik'>
            <Formik
                initialValues={{ name: '', email: '', phone: '' }}

                validate={values => {

                    const errors = {};

                    // Name validation

                    if (!values.name) {
                        errors.name = 'Field name is empty!'
                    } else if (values.name.length < 2) {
                        errors.name = 'Wrong name! Minimum number of characters - 2'
                    }

                    // Email validation

                    if (!values.email) {
                        errors.email = 'Field email is empty!'
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    // Phone validation

                    if (!values.phone) {
                        errors.phone = 'Field phone is empty!'
                    }
                    else if (isNaN(values.phone)) {
                        errors.phone = 'Invalid phone number';
                    }
                    else if (values.phone.length < 12) {
                        errors.phone = 'Minimum number of characters - 12';
                    }

                    return errors;

                }}

                onSubmit={(values) => {
                    alert(`name: ${values.name} \nemail: ${values.email} \nphone: ${values.phone}`)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            className={errors.name ? 'formik-input-error' : 'formik-input'}
                            placeholder='Enter name here'
                        />

                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            className={errors.email ? 'formik-input-error' : 'formik-input'}
                            placeholder='Enter email here'
                        />

                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                            className={errors.phone ? 'formik-input-error' : 'formik-input'}
                            placeholder='Enter phone number'
                        />

                        <ErrorMessage name="name">{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                        <ErrorMessage name="email">{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                        <ErrorMessage name="phone">{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>

                        <button className='submit-btn' type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>

    );
}

export default FormComponent;
