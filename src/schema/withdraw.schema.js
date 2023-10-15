import * as Yup from 'yup';

export const initialWithdrawalValues = {
  amount: '',
  account: '',
  bank: '',
  country: '',
};

export const WithdrawalSchema = Yup.object().shape({
  amount: Yup.string().required('Enter amount you want to withdraw'),
  account: Yup.string().required('Enter an account number'),
  country: Yup.string().required('Select your Country'),
  bank: Yup.string().required('Select a bank'),
});