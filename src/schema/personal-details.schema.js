import * as Yup from 'yup';



const validFileExtensions = {
  image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
  cv: ['pdf', 'doc', 'docx']
};

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

const MAX_FILE_SIZE = 2048000


const acceptedFormats = ['pdf', 'doc', 'docx'];
export const initialTalentProfileValues = {
  profilePicture: "", // The profile picture file will be stored here
  firstname: '',
  lastname: '',
  phone: '',
  continent: '',
  short_bio: '',
  cv: "", // The CV file will be stored here
};

export const TalentProfileSchema = Yup.object().shape({
  profilePicture: Yup
  .mixed()
  .required("Required")
  .test("is-valid-type", "Not a valid image type",
    value => isValidFileType(value && value.name.toLowerCase(), "image"))
  .test("is-valid-size", "Max allowed size is 2mb",
    value => value && value.size <= MAX_FILE_SIZE),
  firstname: Yup.string()
    .max(25, 'First name must be at most 25 characters')
    .required('First name is required'),
  lastname: Yup.string()
    .max(25, 'Last name must be at most 25 characters')
    .required('Last name is required'),
  phone: Yup.string()
    .matches(/^\+\d+$/, 'Invalid phone number format. Example: +1234567890')
    .required('Phone number is required'),
  continent: Yup.string()
    .max(25, 'Location must be at most 25 characters')
    .required('Location is required'),
  short_bio: Yup.string().max(
    500,
    'Short bio must be at most 500 characters'
  ),
  cv: Yup
    .mixed()
    .required('CV is required')
    .test("is-valid-type", "Not a valid CV type",
      value => isValidFileType(value && value.name.toLowerCase(), "cv"))
    .test("is-valid-size", "Max allowed size is 2mb",
      value => value && value.size <= MAX_FILE_SIZE
  )  
});
