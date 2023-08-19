import { ErrorMessage, Field } from 'formik';

const TextArea = ({
  placeholder,
  label,
  setFieldTouched,
  name,
  value,
  type,
  id,
}) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor={id}
        className='mb-[3px] inline-block  dark:text-neutral-200'
      >
        {label || ''}
      </label>
      <Field
        as={'textarea'}
        rows={4}
        column={30}
        name={name}
        value={value || ''}
        onKeyUp={(e) => {
          setFieldTouched(name, true);
        }}
        className='border border-input rounded-md px-[13px] py-3 outline-0'
        type={type}
        id={id}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal'>
            {msg}
          </div>
        )}
      />
    </div>
  );
};

export default TextArea;
