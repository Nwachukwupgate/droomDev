import { ErrorMessage, Field } from 'formik';

const TextArea = ({ placeholder, label, classname, name, value, type, id }) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor='formFile'
        className='mb-[3px] inline-block  dark:text-neutral-200'
      >
        {label || ''}
      </label>
      <textarea
        className='border border-input rounded-md px-[13px] py-3 outline-0'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
