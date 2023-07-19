import moment from "moment";
import React from "react";
import { truncate } from "../../../utils/utils";
import { Icon } from "../../Icons";

const Announcement = ({ data }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <>
      {data?.map((item, index) => (
        <div className="border border-b-grey-input rounded-xl mx-[26px] p-[20px] my-[21px]" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <p className="text-[12px] font-semibold text-grey-text">Attn. all Customers</p>
            </div>
            <div className="flex gap-5">
              <p className="text-[#758089] text-[12px] cursor-pointer hover:text-primary" onClick={() => setShowDetails((prev) => !prev)}>
                {showDetails ? "Hide details" : "See details"}
              </p>
              <div className="rounded-full flex items-center justify-center  bg-red-text h-[6px] w-[6px]"></div>
            </div>
          </div>
          <p className="pr-[19px] flex mt-[14px] flex-col">
            {showDetails ? item?.announcement : truncate(item?.announcement, 100)}
            <span className="mt-2.5">{moment(item?.created_at).format("DD.MM.YYYY hh:mma")}</span>
          </p>
        </div>
      ))}
      <div className="text-grey-label w-[240px] mb-8 mx-auto flex items-center justify-center gap-[13px] rounded-[60px] border bg-white border-grey-label px-[13px] py-3">
        See all announcements
        <Icon width="9" height="12" id={"arrow-down"} />
      </div>
    </>
  );
};

export default Announcement;
