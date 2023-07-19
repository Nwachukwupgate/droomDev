import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

const PasswordConfirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img src="/static/png/padlock.png" alt="key" className="mt-[31px]" />
      <p className="w-[239px] text-center text-grey-text font-normal">
        Your password has been successfully saved to{" "}
        <span className="text-primary cursor-pointer" onClick={() => navigate("/login")}>
          SWAP
        </span>
      </p>
      <Button classname="mt-[30px] mb-[55px] mx-[87px]" onClick={() => navigate("/login")}>
        Proceed to Login
      </Button>
    </div>
  );
};

export default PasswordConfirmation;
