import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
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

const bankOptions = ['Zenith', 'UBA', 'Access'];

const Withdraw = () => {
  const [showEarnings, setShowEarnings] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useGetDashboardQuery();
  const { data: banks } = useGetAllBanksQuery();

  const handleSubmit = (values) => {
    console.log('Submit button clicked'); // This log will show when the form is submitted
    console.log(values);
    setOpen(true);
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
            onSubmit={handleSubmit}
            validationSchema={WithdrawalSchema}
            enableReinitialize
            initialValues={initialWithdrawalValues}
          >
            {({
              values,
              setFieldTouched,
              isValid,
              setFieldValue,
              errors,
              handleChange,
              handleSubmit,
              ...formik
            }) => (
              <form>
                <div className='flex flex-col gap-6'>
                  <InputBox
                    label={'Enter amount'}
                    placeholder={'Email withdrawable amounts'}
                    id={'amount'}
                    name={'amount'}
                    type={'number'}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    formik={formik}
                    value={values?.search}
                  />
                  <div className='flex gap-5 mt-12'>
                    <OutlineButton label={'Cancel'} />
                    <Button
                      type={'submit'}
                      label={'Continue'}
                      className={'bg-primary text-white'}
                      onClick={() => handleSubmit(values)}
                    />
                  </div>
                </div>
              </form>
            )}
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
