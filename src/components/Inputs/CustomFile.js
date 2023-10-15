import React from 'react';
import { useField } from 'formik';

const FileUpload = ({ name, label, onChange, formik, setFieldValue, ...props }) => {
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    field.onChange(event); // Allow Formik to handle the field's value
    onChange(file); // Call the onChange prop to update the state in EditDetails
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
          id={name}
          name={name}
          type="file"
          {...props}
          onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
          }}

        />
      {/* <input
        type="file"
        id={name}
        name={name}
        onChange={handleChange}
        {...props}
      /> */}
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }}>{meta.error}</div>
      ) : null}
      {field.value && field.value.name ? (
        <div>Selected File: {field.value.name}</div>
      ) : null}
    </div>
  );
};


export default FileUpload;
