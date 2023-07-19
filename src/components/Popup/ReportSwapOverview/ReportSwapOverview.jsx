import React, { useRef, useState } from "react";
import DealInfo from "../../DealInfo/DealInfo";
import Label from "../../Label/Label";
import { useGetSingleDealReportQuery } from "../../../redux/services";
import moment from "moment";
import { createPDF, toLocaleFixed } from "../../../utils/utils";
import { useReactToPrint } from "react-to-print";
import { Icon } from "../../Icons";
import Popup from "reactjs-popup";
import LoadingSpinner from "../../Loader/LoadingSpinner";

const ReportSwapOverview = ({ open, setOpen, selected }) => {
  const { data, isFetching: isLoading } = useGetSingleDealReportQuery(selected);
  const componentRef = useRef(null);
  const [isPrint, setIsPrint] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const handlePrint = useReactToPrint({
    onBeforeGetContent: () => {
      setIsPrint(true);
      return Promise.resolve();
    },
    onAfterPrint: () => {
      setIsPrint(false);
    },
    content: () => componentRef.current,
  });

  return (
    <Popup
      onClose={closeModal}
      open={open}
      position="right center"
      modal
      overlayStyle={{ background: "rgba(0, 0, 0, 0.8)" }}
      nested
      contentStyle={{
        maxHeight: "100%",
        padding: 0,
        borderRadius: "12px",
        backgroundColor: "white",
        width: "fit-content",
        boxShadow: "none",
        overflow: "hidden",
        maxWidth: "600px",
      }}
    >
      <div className="flex pl-10 pr-6 justify-between items-center sticky z-50 top-0 bg-white border-b border-b-grey-input ">
        <p className="text-[16px] font-semibold">Swap Overview</p>
        <div className="flex gap-2">
          <div className="flex justify-end gap-5 pt-2 pb-2 pl-10">
            <button
              className="py-2 px-5 focus:outline-none text-white text-sm border-primary border-2 bg-primary rounded-md hover:bg-transparent hover:text-primary"
              onClick={() => {
                handlePrint();
              }}
            >
              Print
            </button>
            <button className="py-2 px-5 text-primary flex gap-2 items-center text-sm border-primary border-2 rounded-md " onClick={createPDF}>
              <Icon id="export-filled" width="14" height="16" /> <p>Export</p>
            </button>
          </div>
          <div onClick={() => closeModal()} className="justify-end flex cursor-pointer gap-2 items-center">
            <div className="m-5">
              <Icon width="24" height="24" id="close-red-icon" />
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-grey-bg overflow-auto max-h-[90vh]">
          <div ref={componentRef} className={`px-8 py-8`} id="pdf">
            <div>
              <p className={`text-border text-xs  pb-3 ${isPrint && "pl-4"}`}>Customer Profile</p>
              <div className="bg-white">
                <div className={`px-4 pt-7 ${isPrint && "pt-2"}`}>
                  <div className={`flex flex-wrap justify-between items-center border-b `}>
                    <DealInfo classname="capitalize" title="First Name:" text={data?.customer_profile?.first_name} />
                    <DealInfo classname="capitalize" title="Last Name:" text={data?.customer_profile?.last_name} />
                    <DealInfo title="Email:" text={data?.customer_profile?.email} />
                    <DealInfo classname="capitalize" title="Location:" text={data?.customer_profile?.location} />{" "}
                    <DealInfo classname="capitalize" title="Username:" text={data?.customer_profile?.username} />
                    <DealInfo classname="capitalize" title="Phone No:" text={data?.customer_profile?.phone} />
                    <DealInfo classname="capitalize" title="Gender:" text={data?.customer_profile?.gender} />
                    <DealInfo classname="capitalize" title="Wallet Type:" text={data?.customer_profile?.wallet_type} />
                    <DealInfo
                      classname="capitalize"
                      title="Wallet Balance:"
                      text={toLocaleFixed(data?.customer_profile?.balance, 2) + " " + data?.customer_profile?.wallet_type}
                    />
                    <DealInfo
                      classname="capitalize"
                      title="Available Balance:"
                      text={toLocaleFixed(data?.customer_profile?.available_balance, 2) + " " + data?.customer_profile?.wallet_type}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className={`text-border text-xs pt-6 pb-3 ${isPrint && "pl-4"}`}>Swap Details</p>
              <div className="bg-white">
                <div className={`px-4 pt-7 ${isPrint && "pt-2"}`}>
                  <div className={`flex flex-wrap justify-between items-center border-b `}>
                    <DealInfo classname="capitalize" title="Swap Currency:" text={data?.swap_details?.destination_currency} />
                    <DealInfo classname="capitalize" title="Currency:" text={data?.swap_details?.source_currency} />
                    <DealInfo classname="capitalize" title="Amount:" text={toLocaleFixed(data?.swap_details?.amount, 2)} />
                    <DealInfo
                      classname="capitalize"
                      title="Exchange Rate:"
                      text={data?.swap_details?.exchange_rate + " " + data?.swap_details?.source_currency}
                    />
                    <DealInfo classname="capitalize" title="Total Amount:" text={toLocaleFixed(data?.swap_details?.total_amount, 2)} />
                    <DealInfo
                      classname="capitalize"
                      title="Service Charge:"
                      text={toLocaleFixed(data?.swap_details?.service_charge, 2) + " " + data?.swap_details?.source_currency}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className={`text-border text-xs pt-6 pb-3 ${isPrint && "pl-4"}`}>Swap To</p>
              <div className="bg-white">
                <div className={`px-4 pt-7 ${isPrint && "pt-2"}`}>
                  <div className={`flex flex-wrap justify-between items-center border-b `}>
                    <DealInfo classname="capitalize" title="Bank Name:" text={data?.swap_to?.bank_name} />
                    <DealInfo classname="capitalize" title="Account No:" text={data?.swap_to?.account_number} />
                    <DealInfo classname="capitalize" title="Account Name:" text={data?.swap_to?.account_name} />
                    <DealInfo classname="capitalize" title="Date:" text={moment(data?.swap_to?.date).format("DD.MM.YYYY - hh:mma")} />
                    <DealInfo classname="capitalize" title="Status:" text={<Label label={data?.swap_to?.status} />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ReportSwapOverview;
