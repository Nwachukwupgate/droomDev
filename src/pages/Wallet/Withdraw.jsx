import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Button from '../../components/Button';
import OutlineButton from '../../components/Button/OutlineButton';

const Withdraw = () => {
  const [showEarnings, setShowEarnings] = useState(true);
  const amount = '$8,690.62';
  return (
    <div>
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
      <section id='withdrawal-form' className='mb-20'>
        <form>
          <div className='relative mb-6'>
            <label htmlFor='amount' className='mb-2'>
              Enter amount
            </label>
            <input
              type='text'
              className='peer block min-h-[auto] w-full rounded-md border border-input bg-transparent px-5 py-2.5 leading-[2.3] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 :placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id='amount'
              placeholder='Email withdrawable amounts'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='account' className='mb-2'>
              Account number{' '}
            </label>
            <input
              type='text'
              className='peer block min-h-[auto] w-full rounded-md border border-input bg-transparent px-5 py-2.5 leading-[2.3] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 :placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id='account'
              placeholder='Enter your account'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='bank' className='mb-2'>
              Bank name
            </label>
            <input
              type='text'
              className='peer block min-h-[auto] w-full rounded-md border border-input bg-transparent px-5 py-2.5 leading-[2.3] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 :placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id='bank'
              placeholder='Enter bank name'
            />
          </div>
          <div className='flex gap-5'>
            <OutlineButton label={'Cancel'} />
            <Button label={'Continue'} className={'bg-primary text-white'} />
          </div>
        </form>
      </section>
      <TransactionTable />
    </div>
  );
};

export default Withdraw;
