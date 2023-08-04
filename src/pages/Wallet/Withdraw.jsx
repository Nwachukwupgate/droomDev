import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Button from '../../components/Button';
import OutlineButton from '../../components/Button/OutlineButton';
import Pagination from '../../components/Pagination/Pagination';
import SuccessModal from '../../components/Modal/SuccessModal';
import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
  const [showEarnings, setShowEarnings] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!open) {
  //     navigate('details');
  //   }
  // }, [open]);

  const submitHandler = (e) => {
    // e.preventDefault();
    setOpen(true);
  };
  const closeModalHandler = () => {
    setOpen(false);
  };
  const handleModalClose = () => {
    closeModalHandler();
    navigate('details'); // Navigate here when the modal is closed
  };
  const amount = '$8,690.62';

  return (
    <div className='xl:flex justify-between gap-5 items-end'>
      <SuccessModal
        open={open}
        closeModal={handleModalClose}
        // onModalClose={handleModalClose}
      />
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
          <form>
            <div className='relative mb-6'>
              <label htmlFor='amount' className=''>
                Enter amount
              </label>
              <input
                type='text'
                className='mt-[7px] min-h-[auto] w-full rounded-md border border-input bg-transparent px-5 py-2.5 leading-[2.3] outline-none focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 '
                id='amount'
                placeholder='Email withdrawable amounts'
              />
            </div>
            <div className='relative mb-[30px]'>
              <label htmlFor='account' className=''>
                Account number
              </label>
              <input
                type='text'
                className='mt-[7px]  min-h-[auto] w-full rounded-md border border-input bg-transparent px-5 py-2.5 leading-[2.3] outline-none focus:placeholder:opacity-100  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200'
                id='account'
                placeholder='Enter your account'
              />
            </div>
            <div className='relative'>
              <label htmlFor='bank' className=''>
                Bank name
              </label>
              <input
                type='text'
                className='mt-[7px]   min-h-[auto] w-full rounded-md border border-input bg-transparent px-5 py-2.5 leading-[2.3] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200'
                id='bank'
                placeholder='Enter bank name'
              />
            </div>
            <div className='flex gap-5 mt-12'>
              <OutlineButton label={'Cancel'} />
              <Button
                // type={'submit'}
                label={'Continue'}
                className={'bg-primary text-white'}
                onClick={submitHandler}
              />
            </div>
          </form>
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
