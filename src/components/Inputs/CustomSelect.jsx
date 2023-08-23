import { useField } from 'formik'
import React from 'react'

const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <>
      <div className='inline-flex flex-col'>
        <label
          className='mb-[3px] inline-block  dark:text-neutral-200'
        >
          {label || ''}
        </label>
        <select {...props} {...field} 
        className={`border rounded-md px-[13px] py-3 outline-0 ${
          meta.touched && meta.error ? 'border-red-500' : ''
          }`}
        />
        {meta.touched && meta.error && (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal'>
            {meta.error}
          </div>
        )}

      </div>
    </>
  )
}

export default CustomSelect