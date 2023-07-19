import React from "react";
import Button from "../../Button/Button";
import OTPInput from "../../OTPInput/Index";

const ConfirmOTP = ({ email, loader, confirmToken, otp, setOtp, handleOnSubmit }) => {
  const handleSubmit = () => {
    otp.length === 4 && confirmToken({ token: otp, email });
  };
  return (
    <div className="px-[12px] md:px-[150px]">
      <div className="mb-[57px] mt-[73px]">
        <h2 className="text-title text-[18px] font-bold md:leading-[106%] text-center md:w-[257px] mx-auto">
          Input 4 digit code sent to your provided email
        </h2>
      </div>
      <div className="mb-10">
        <OTPInput
          autoFocus
          isNumberInput
          length={4}
          className="my-[1.46rem] flex items-center  justify-center"
          inputClassName="text-[0.78125rem] md:px-[14px] shadow-xl md:py-2 text-primary font-normal focus:outline-none outline-none rounded-2xl text-center w-[52px] text-2xl mr-[0.83rem]"
          onChangeOTP={(otp) => setOtp(otp)}
        />
      </div>
      <Button classname="mt-[30px] mb-[22px]" onClick={handleSubmit} loader={loader}>
        Recover{" "}
      </Button>{" "}
      <div>
        <p className="text-base text-center mt-[52px] mb-[44px]">
          Didn’t get the link??
          <span className="text-grey-label cursor-pointer" onClick={handleOnSubmit}>
            Resend Link
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConfirmOTP;
