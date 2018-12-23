import React, { Component } from 'react';
import { Formik } from 'formik';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

const onSubmit = async (values) => {
  console.log(JSON.stringify(values, 0, 2));
};


class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Customer Form</div>
        <Form
          onSubmit={onSubmit}
          initialValues={{ name: 'Dummy', mobile: '' }}
          mutators={{
            ...arrayMutators,
          }}
          render={({
 handleSubmit, form, submitting, pristine, values, mutators: { push, pop },
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Customer Name</label>
      <Field
        name="name"
        component="input"
        type="text"
        placeholder="First Name"
      />
    </div>
    <div>
      <label>Mobile Number</label>
      <Field
        name="mobile"
        component="input"
        type="text"
        placeholder="First Name"
      />
    </div>
    <FieldArray name="dimensions">
      {({ fields }) =>
        fields.map((name, index) => (
          <div key={name}>
            <label>Cust. #{index + 1}</label>
            <Field
              name={`${name}.firstName`}
              component="input"
              placeholder="First Name"
            />
            <Field
              name={`${name}.lastName`}
              component="input"
              placeholder="Last Name"
            />
            <span
              onClick={() => fields.remove(index)}
              style={{ cursor: 'pointer' }}
            >
              ❌
            </span>
          </div>
      ))}
    </FieldArray>
    <div className="buttons">
      <button
        type="button"
        onClick={() => push('customers', undefined)}
      >
                Add Customer
      </button>
      <button type="button" onClick={() => pop('customers')}>
                Remove Customer
      </button>
    </div>
    <button type="submit" disabled={submitting || pristine}>
          Submit
    </button>
  </form>
      )}
        />
      </div>
    );
  }
}

export default CustomerForm;
