import * as Yup from 'yup';

export const initialWithdrawValues = {
  amount: '',
  account: '',
  bank: '',
};

export const WithdrawSchema = Yup.object().shape({
  amount: Yup.string().required('Enter amount you want to withdraw'),
  account: Yup.string().required('Enter an account number'),
  bank: Yup.string().required('Select a bank'),
});
