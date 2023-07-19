import React from "react";
import { Icon } from "../../Icons";

const Header = ({ close, tab, toggleTab }) => {
  return (
    <>
      <div className="flex justify-between items-center sticky top-0 bg-white">
        <div className="flex items-center mx-2 mt-2">
          <div
            onClick={() => toggleTab((prev) => !prev)}
            className={`relative cursor-pointer  px-[32px] py-4 text-grey-text 
       ${
         tab &&
         "bg-[#F8F9FF] text-[#596080] font-semibold after:content-[' '] after:h-1.5 after:rounded-t-lg after:mx-auto after:left-0 after:right-0 after:bottom-0 after:w-[90%] after:absolute after:bg-[#5C70AF]"
       }
         `}
          >
            <p> Notification </p>
          </div>
          <p
            onClick={() => toggleTab((prev) => !prev)}
            className={`relative cursor-pointer px-[32px] py-4 text-grey-text 
       ${
         !tab &&
         "bg-[#F8F9FF] text-[#596080] font-semibold after:content-[' '] after:h-1.5 after:rounded-t-lg after:mx-auto after:left-0 after:right-0 after:bottom-0 after:w-[90%] after:absolute after:bg-[#5C70AF]"
       }
         `}
          >
            Announcements
          </p>
        </div>
        <div onClick={close} className="justify-end flex cursor-pointer gap-2 items-center">
          <div className="m-5">
            <Icon width="24" height="24" id="close-red-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
