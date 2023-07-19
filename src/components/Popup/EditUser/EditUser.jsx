import { Formik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  useGetAUserQuery,
  useUpdateUserMutation,
} from "../../../redux/services";
import {
  initialUserProfile,
  UserProfileSchema,
} from "../../../schema/sign-in.schema";
import { Icon } from "../../Icons";
import InputBox from "../../InputBox";
import Loading from "../../Loader/Loading";
import LoadingSpinner from "../../Loader/LoadingSpinner";
import ControlledModal from "../../Modal/ControlledModal";

const EditUser = ({ close, isEdit, action, data, loader, id }) => {
  const [skip, setSkip] = useState(true);
  const { data: userData, isLoading } = useGetAUserQuery(id, { skip });
  const [
    updateUser,
    { data: updateResponse, isLoading: loading, isSuccess, isError, error },
  ] = useUpdateUserMutation();
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    isEdit && close();
  };

  const handleSubmit = async (values) => {
    isEdit ? await updateUser({ id, ...values }) : await action(values);
    closeModal();
  };

  useEffect(() => {
    if (id) {
      setSkip(false);
    }
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(updateResponse?.message);
    }
    if (isError && error && "status" in error) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError, error, updateResponse?.message]);

  const roles = useMemo(() => {
    return data?.map((item) => ({
      key: item.id,
      value: (
        <p className='text-grey-label text-[12px]'>
          {item.name}
          <span className='text-grey-text'> - {item.description}</span>
        </p>
      ),
    }));
  }, [data]);

  return (
    <>
      {isEdit ? (
        <div
          className='py-[14px] px-[21px] pr-[92px] w-full text-left'
          onClick={() => setOpen((o) => !o)}
        >
          Edit
        </div>
      ) : (
        <div
          className='bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary px-3 py-2 text-white rounded-lg cursor-pointer'
          onClick={() => setOpen((o) => !o)}
        >
          + Add New User
        </div>
      )}
      <ControlledModal open={open} closeModal={closeModal}>
        <div className='bg-grey-bg max-h-[90vh] overflow-auto'>
          <div className='flex pl-10 pr-6 justify-between items-center sticky z-50 top-0 bg-white border-b border-b-grey-input'>
            <p className='text-[16px] font-semibold'>
              {isEdit ? "Edit" : "New"} User
            </p>
            <div
              onClick={() => (isEdit ? close() : closeModal())}
              className='justify-end flex cursor-pointer gap-2 items-center'
            >
              <div className='m-5'>
                <Icon width='24' height='24' id='close-red-icon' />
              </div>
            </div>
          </div>
          <div className='px-10'>
            {isLoading ? (
              <div className='py-[14px] px-[21px] w-[500px]'>
                <LoadingSpinner />
              </div>
            ) : (
              <Formik
                onSubmit={handleSubmit}
                validationSchema={UserProfileSchema}
                enableReinitialize
                initialValues={{
                  ...initialUserProfile,
                  first_name: userData?.data.first_name,
                  last_name: userData?.data.last_name,
                  email: userData?.data.email,
                  role_id: userData?.data.roles?.id?.toString(),
                }}
              >
                {({
                  values,
                  setFieldTouched,
                  isValid,
                  handleSubmit,
                  setFieldValue,
                  errors,
                }) => (
                  <>
                    <InputBox
                      placeholder='input first name'
                      label='First Name'
                      name='first_name'
                      value={values?.first_name}
                      isValid={values?.first_name && !errors?.first_name}
                      setFieldTouched={setFieldTouched}
                    />
                    <InputBox
                      placeholder='input last name'
                      label='Last Name'
                      name='last_name'
                      value={values?.last_name}
                      setFieldTouched={setFieldTouched}
                      isValid={values?.last_name && !errors?.last_name}
                    />
                    <InputBox
                      placeholder='input email'
                      label='Email'
                      name='email'
                      value={values?.email}
                      isValid={values?.email && !errors?.email}
                      setFieldTouched={setFieldTouched}
                    />
                    <div className='mt-4 '>
                      <label className='text-[14px] leading-[22.4px] text-grey-label'>
                        Role
                      </label>
                      <div className='text-grey-text gap-[13px] bg-white border border-grey-input rounded-xl overflow-hidden mt-1'>
                        <div className=' gap-[13px] bg-grey-bg px-[10px] py-[8px] cursor-pointer'>
                          Select Role
                        </div>
                        {roles.map(({ key, value }) => (
                          <div
                            key={key}
                            className={`border-t border-t-grey-input py-[14px] px-[21px] gap-4  cursor-pointer flex items-center w-full  ${
                              values?.role_id === `${key}` && "bg-[#F8F9FF]"
                            }`}
                            onClick={() => {
                              setFieldValue("role_id", `${key}`);
                            }}
                          >
                            <p
                              className={`h-5 w-5 border rounded-full ${
                                values?.role_id === `${key}` &&
                                "bg-primary bg-[url(../public/svgs/check.svg)] bg-no-repeat bg-center"
                              }`}
                            ></p>
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='flex gap-4 mt-[72px] pb-[38px]'>
                      <div
                        className='text-primary px-3 py-2 bg-white border border-primary rounded-xl cursor-pointer'
                        onClick={closeModal}
                      >
                        Cancel
                      </div>
                      <div
                        className={`px-3 py-2  rounded-xl cursor-pointer ${
                          !isValid || !values?.email
                            ? "bg-grey-input text-[#B3B3B3]"
                            : "bg-primary text-white"
                        } `}
                        disabled={!isValid || !values?.email}
                        onClick={handleSubmit}
                      >
                        {loader || loading ? (
                          <Loading />
                        ) : isEdit ? (
                          "Update"
                        ) : (
                          "Send Invite"
                        )}
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            )}
          </div>
        </div>
      </ControlledModal>
    </>
  );
};

export default EditUser;
