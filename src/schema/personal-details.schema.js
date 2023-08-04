import * as Yup from "yup";

export const initialSignInValues = {
  email: "",
  password: "",
};

export const initialUserProfile = {
  email: "",
  first_name: "",
  last_name: "",
  role_id: "",
};

export const initialEmailValue = {
  email: "",
};

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").trim().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").trim().required("Email is required"),
});

export const UserProfileSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  role_id: Yup.string().required("Role is required"),
  email: Yup.string().email("Invalid email format").trim().required("Email is required"),
});

export const initialPasswordValues = {
  password: "",
  password_confirmation: "",
};
export const passwordValidationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required").min(8, "minimum of 8 characters"),
  password_confirmation: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});
