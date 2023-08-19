import * as Yup from 'yup';

export const initialTalentProfileValues = {
  image: '',
  first_name: '',
  last_name: '',
  skills: '',
  phone_number: '',
  location: '',
  introduction: '',
};

export const TalentProfileSchema = Yup.object().shape({
  image: Yup.string()
    .required('Image is required')
    .matches(
      /\.(jpg|jpeg|png|gif)$/i,
      'Image format must be jpg, jpeg, png, or gif'
    ),
  first_name: Yup.string()
    .max(25, 'First name must be at most 25 characters')
    .required('First name is required'),
  last_name: Yup.string()
    .max(25, 'Last name must be at most 25 characters')
    .required('Last name is required'),
  skills: Yup.string()
    .max(25, 'Skills must be at most 25 characters')
    .required('Skills are required'),
  phone_number: Yup.string()
    .matches(/^\+\d+$/, 'Invalid phone number format. Example: +1234567890')
    .required('Phone number is required'),
  location: Yup.string()
    .max(25, 'Location must be at most 25 characters')
    .required('Location is required'),
  introduction: Yup.string().max(
    500,
    'Introduction must be at most 500 characters'
  ),
});
