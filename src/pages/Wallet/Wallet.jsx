import React from 'react';
import Earnings from '../../components/Cards/Earnings';
import Balance from '../../components/Cards/Balance';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import TransactionTable from './TransactionTable';

const Wallet = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-9 '>
        <Earnings />
        <Balance />
      </div>
      <section id='withdraw-funds' className='mt-16 mb-14'>
        <h1 className='text-xl lg:text-[1.75rem] font-extrabold'>
          Withdraw funds
        </h1>
        <Divider className={'mt-5 mb-7'} />

        <div className='flex flex-col md:flex-row lg:w-4/5 gap-4 items-start'>
          <p>
            Payment will be made directly to your bank account upon request for
            withdrawal. Ensure the payment details provided is correct. Input
            your account number and bank name.
          </p>
          <Button
            label={'Withdraw funds'}
            className={'text-white bg-primary'}
          />
        </div>
      </section>
      <>
        <TransactionTable />
      </>
    </div>
  );
};

export default Wallet;
