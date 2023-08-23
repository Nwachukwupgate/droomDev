import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from "formik";
import { IoEye, IoEyeOff } from 'react-icons/io5';

import TransactionTable from './TransactionTable';
import Button from '../../components/Button';
import OutlineButton from '../../components/Button/OutlineButton';
import Pagination from '../../components/Pagination/Pagination';
import SuccessModal from '../../components/Modal/SuccessModal';
import { useNavigate } from 'react-router-dom';
import { useGetDashboardQuery } from '../../features/api/apiSlice';
import InputBox from '../../components/Inputs/InputBox';
import {
  WithdrawalSchema,
  initialWithdrawalValues,
} from '../../schema/withdraw.schema';
import SearchSelectOptions from '../../components/SearchBar/SearchSelectOptions';
import { useGetAllBanksQuery } from '../../features/api/apiSlice';
import CustomInput from '../../components/Inputs/CustomInput';
import CustomSelect from '../../components/Inputs/CustomSelect';

const bankOptions = ['Zenith', 'UBA', 'Access'];


const Withdraw = () => {
  const [showEarnings, setShowEarnings] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useGetDashboardQuery();
  const { data: banks } = useGetAllBanksQuery();

  console.log('Component rendered'); // Add this line
  // ... rest of the component

  const onSubmit = async (values, formikProps) => {
    console.log("onSubmit -> values, formikProps", values, formikProps);
    console.log("button here clicked for check");
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log("resolved timeout at onSubmit");
      }, 5000);
  };

  useEffect(()=> {console.log(initialWithdrawalValues);}, [initialWithdrawalValues])

  const handleNavigation = () => {
    setOpen(false);
    navigate('details');
  };

  const { myBalance = '...' } = data?.data ?? {};
  const amount = `$${myBalance}`;

  return (
    <div className='xl:flex justify-between gap-5 items-end'>
      <SuccessModal open={open} closeModal={handleNavigation} />
      <div className='basis-1/2'>
        <div>
          <h2 className='md:text-lg lg:text-xl font-semibold mb-5'>
            Total Available Balance
          </h2>
          <div className='inline-flex justify-between items-center gap-10'>
            <span className='text-4xl font-semibold leading-8 text-[#575555] '>
              {showEarnings ? amount : '****.**'}
            </span>
            <span onClick={() => setShowEarnings((o) => !o)}>
              {!showEarnings && <IoEye size={25} />}
              {showEarnings && <IoEyeOff size={25} />}
            </span>
          </div>
        </div>
        <section id='withdrawal-form' className='mb-[30px] mt-12'>
        <Formik
            initialValues={{
              amount: '',
              account: '',
              country: '',
              bank: '',
            }}
            validationSchema={WithdrawalSchema}
            onSubmit={onSubmit}
            
            // enableReinitialize
            
          >
            
            <Form>
              <div className='flex flex-col gap-6'>               
                <Field
                  label='Enter amount'
                  name='amount'
                  placeholder='Enter withdrawable amounts'
                  type='number'
                  component={CustomInput}
                />

                <Field 
                  label='Account number'
                  name='account'
                  placeholder='Enter your account'
                  type='number'
                  component={CustomInput}
                />

                <Field
                  label='Bank name'
                  name='bank'
                  placeholder='Enter bank name'
                  component={CustomSelect}
                >
                  <option>PLease select a bank</option>
                  {bankOptions.map((bank, index) => (
                    <option key={index}>{bank}</option>
                  ))}
                </Field>
                {/* <InputBox
                  label={'Enter amount'}
                  placeholder={'Email withdrawable amounts'}
                  id={'amount'}
                  name={'amount'}
                  type={'number'}
                  value={values?.amount}
                  isValid={values?.amount && !errors?.amount}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  label={'Account number'}
                  placeholder={'Enter your account'}
                  id={'account'}
                  name={'account'}
                  type={'number'}
                  value={values?.account}
                  isValid={values?.account && !errors?.account}
                  setFieldTouched={setFieldTouched}
                />
                <SearchSelectOptions
                  options={bankOptions}
                  name='bank'
                  setFieldValue={setFieldValue}
                  label='Bank name'
                  placeholder='Enter bank name'
                  formik={props}
                  value={values?.search}
                /> */}
                <div className='flex gap-5 mt-12'>
                  {/* <OutlineButton label={'Cancel'} /> */}
                  {/* <Button
                    type={'submit'}
                    label={'Continue'}
                    disabled={isSubmitting}
                    className={'bg-primary text-white'}
                    // onClick={() => {
                    //   console.log('Continue button clicked'); // Add this line
                    //   handleSubmit();
                    // }}
                  /> */}
                  <button type="button" onClick={onSubmit}>Submit me</button>
                </div>
              </div>
            </Form>
            
          </Formik>
        </section>
      </div>
      <div className='basis-1/2 flex flex-col  gap-3'>
        <TransactionTable />
        <Pagination />
      </div>
    </div>
  );
};

export default Withdraw;
