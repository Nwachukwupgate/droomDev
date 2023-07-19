import React, { useState } from "react";
import { Icon } from "../../Icons";
import Label from "../../Label/Label";

export const tabs = ["Front ID", "Back ID"];

const Overlay = ({ close, src, isback, filename, size, status }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col md:w-[50vw] h-[70vh]">
      <div className="flex justify-between items-center bg-white px-5 ">
        <p className="text-grey-text">jpeg.2345677</p>{" "}
        <div onClick={close} className="justify-end flex cursor-pointer gap-2 items-center">
          <div className="my-5">
            <Icon width="24" height="24" id="close-red-icon" />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="w-[55%] flex flex-col h-full">
          <div className="bg-[#F7F7F7] h-[90%]">
            <div className="mt-3 flex items-center justify-center w-full">
              {isback && (
                <div className="flex justify-between items-center">
                  <div className="flex items-center mx-10 mt-2 ">
                    {tabs.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => toggleTab(index)}
                        className={`relative cursor-pointer  px-[32px] py-2 text-grey-text ${activeTab === index && "bg-white border"}`}
                      >
                        <p> {item} </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className={`flex items-center justify-center h-full ${isback && "-mt-10"}`}>
              <img src={isback ? src[activeTab] : src} alt="" />
            </div>
          </div>
          <div className="bg-white flex h-[10%] px-7 justify-between items-center">
            <div className="flex gap-2 items-center">
              <Icon id="zoomplus" width="16" height="16" />
              <Icon id="zoomminus" width="16" height="16" />
            </div>
            <div className="flex gap-2 items-center">
              <Icon id="reload-right" width="16" height="15" />
              <Icon id="reload-left" width="16" height="15" />
            </div>
            <div className="flex gap-2 items-center">
              <Icon id="grid-vertical" width="12" height="16" />
              <Icon id="grid-horiz" width="16" height="12" />
            </div>
          </div>
        </div>
        <div className="text-grey-text flex flex-col w-[45%] justify-between">
          <div className="ml-10 flex flex-col gap-4 mt-4">
            <p>
              File name:{" "}
              <span className="px-2 ml-3 py-1 text-12px] text-center capitalize rounded-[8px] bg-[#724de41a] text-[#596080]">
                {isback ? filename[activeTab] : filename}
              </span>
            </p>
            <p>
              File size: <span className="px-2 ml-3 py-1 text-12px] text-center capitalize">{size}</span>
            </p>
            <p className="flex items-center gap-3">
              Status:
              <Label label={status} />
            </p>
            <div>
              <p className="flex gap-2 items-center">
                View Comments
                <span className="w-8 h-8 flex items-center rounded-lg justify-center">
                  <i className="fa fa-angle-up text-grey-text"></i>
                </span>
              </p>
              <div className="h-[200px] overflow-auto hidden">
                {Array(12)
                  .fill("")
                  .map((_, index) => (
                    <p key={index}>No Comments</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center border-t pt-8 pb-16">
            <p className="text-grey-text text-[12px]">Update Status</p>
            <div className="flex gap-6">
              <div className="rounded-lg text-success border border-success px-3 py-1">Verify</div>
              <div className="rounded-lg text-[#E11900] border border-[#E11900] px-3 py-1">Reject</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
