import React, { useState, useRef, useMemo } from "react";
import { Icon } from "../../Icons";
import ControlledModal from "../../Modal/ControlledModal";
import DealInfo from "../../DealInfo/DealInfo";
import FlexedCurrency from "../../FlexedCurrency/FlexedCurrency";
import Label from "../../Label/Label";
import { useGetTransactionsByIdQuery } from "../../../redux/services/transactionApi";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import { toLocaleFixed, transactionOverviewPDF } from "../../../utils/utils";
import PageLoader from "../../Loader/PageLoader";


const TransactionOverview = ({
  close,
  isEdit,
  action,
  data,
  loader,
  id,
  userId,
}) => {
  const [openme, setOpenme] = useState(true);
  const [isPrint, setIsPrint] = useState(false);
  const [userStatus, setUserStatus] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const { data: transaction, isFetching: isLoading } =
    useGetTransactionsByIdQuery(userId);

  const closeModal = () => {
    setOpenme(false);
    isEdit && close();
  };

  const componentRef = useRef(null);

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

  useMemo(() => {
    if (transaction?.data?.deposit?.status === "pending") {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }

    if (transaction?.data?.deposit?.status === "failed") {
      setIsFailed(true);
    } else {
      setIsFailed(false);
    }
  }, [transaction?.data?.deposit?.status]);

  return (
    <div>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <ControlledModal open={openme} closeModal={closeModal}>
          <div className="bg-grey-bg max-h-[90vh] overflow-auto">
            <div className="flex pl-10 pr-6 justify-between items-center sticky z-50 top-0 bg-white border-b border-b-grey-input">
              <div className="flex items-center gap-4 p-3">
                <p
                  className={`text-[16px] font-semibold ${
                    isPrint && "text-[20px]"
                  }`}
                >
                  Transaction Overview
                </p>
                <div
                  className="bg-primary hover:bg-white hover:border-2 hover:border-primary hover:text-primary px-3 py-[6px] text-white rounded-lg cursor-pointer"
                  onClick={handlePrint}
                >
                  Print
                </div>
                <div
                  onClick={() => transactionOverviewPDF("transaction_overview")}
                  className="flex px-3 py-[6px]  items-center rounded-md justify-center gap-[13px] text-primary  fill-current hover:bg-primary hover:text-white  border-2 border-primary"
                >
                  <Icon width="14" height="16" id={"export-icon-purple"} />
                  Export
                </div>
                <div
                  onClick={() => (isEdit ? close() : closeModal())}
                  className="justify-end flex cursor-pointer gap-2 items-center"
                >
                  <div>
                    <Icon width="24" height="24" id="close-red-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 py-[30px]" ref={componentRef} id="trans">
              <>
                <p
                  className={`text-border text-xs mb-3 ${
                    isPrint && "text-[20px]"
                  }`}
                >
                  Customer Profile
                </p>
                <div className="w-[50vw] bg-white px-12 pt-7 border print:w-[90vw]">
                  <div className="flex flex-wrap  justify-between items-center">
                    <DealInfo
                      title="First Name:"
                      text={
                        transaction?.data?.user?.personal_details?.first_name
                      }
                    />
                    <DealInfo
                      title="Last Name:"
                      text={
                        transaction?.data?.user?.personal_details?.last_name
                      }
                    />
                    <DealInfo
                      title="Email:"
                      text={
                        transaction?.data?.user?.verified_data?.email?.email
                      }
                    />
                    <DealInfo
                      title="Location:"
                      text={
                        transaction?.data?.user?.personal_details?.country?.name
                      }
                    />
                    <DealInfo
                      title="Username:"
                      text={transaction?.data?.user?.personal_details?.username}
                    />
                    <DealInfo
                      title="Phone No:"
                      text={transaction?.data?.user?.personal_details?.phone}
                    />
                    <DealInfo
                      title="Gender:"
                      text={transaction?.data?.user?.personal_details?.gender}
                    />
                    <DealInfo
                      title="Wallet Type:"
                      text={transaction?.data?.wallet?.currency}
                    />
                    <DealInfo
                      title="Wallet Balance:"
                      text={
                        toLocaleFixed(transaction?.data?.wallet?.balance, 2) +
                        " " +
                        transaction?.data?.wallet?.currency
                      }
                    />
                    <DealInfo
                      title="Available Balance:"
                      text={
                        toLocaleFixed(
                          transaction?.data?.wallet?.available_balance,
                          2
                        ) +
                        " " +
                        transaction?.data?.wallet?.currency
                      }
                    />
                    <DealInfo title="Amount in Escrow:" text="5,030NGN" />
                    <div className="flex justify-start items-center w-full mt-3">
                      <div className="w-[60%] pb-4 flex items-center gap-3">
                        <p className="text-xs text-grey-text">
                          {"Amount in Escrow:"}
                        </p>
                        <p className="text-sm text-grey-label">
                          {transaction?.data?.wallet?.locked_balance +
                            " " +
                            transaction?.data?.wallet?.currency}
                        </p>
                      </div>
                      <div className="w-[40%] pb-4 flex items-center gap-3">
                        <button
                          className={
                            userStatus
                              ? "text-red-text focus:outline-none border-red-text border py-1 px-3 text-sm rounded-md"
                              : "text-gray-400 focus:outline-none border-gray-300 border py-1 px-3 text-sm rounded-md bg-gray-300  cursor-not-allowed"
                          }
                        >
                          Debit Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              <>
                <p className="text-border text-xs mt-8 mb-3">
                  Transaction Profile
                </p>
                <div className="w-[50vw] bg-white px-12 pt-7 border print:w-[90vw]">
                  <div className="flex flex-wrap  justify-between items-center">
                    <div className="flex justify-start items-center w-full mt-3">
                      <div className="w-[60%] pb-4 flex items-center gap-3">
                        <p className="text-xs text-grey-text">
                          {"Amount in Escrow:"}
                        </p>
                        <p className="text-sm text-grey-label">
                          {transaction?.data?.wallet?.locked_balance +
                            " " +
                            transaction?.data?.wallet?.currency}
                        </p>
                      </div>
                      <div className="w-[40%] pb-4 flex items-center gap-3">
                        <button
                          className={
                            userStatus
                              ? "text-success  focus:outline-none border-success border py-1 px-3 text-sm rounded-md"
                              : "text-gray-400 focus:outline-none border-gray-300 border py-1 px-3 text-sm rounded-md bg-gray-300  cursor-not-allowed"
                          }
                        >
                          Credit Account
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap  justify-between items-center">
                      <DealInfo
                        title="Amount:"
                        text={transaction?.data?.deposit?.amount}
                      />
                      <div className="w-[40%] pb-4 flex items-center gap-3">
                        <p className="text-xs text-grey-text">Currency</p>
                        <FlexedCurrency
                          src={
                            transaction?.data?.user?.personal_details?.country
                              ?.flag_url
                          }
                          symbol={transaction?.data?.deposit?.currency}
                        />
                      </div>
                      <DealInfo
                        title="Ref ID:"
                        text={transaction?.data?.wallet?.wallet_number}
                      />
                      <DealInfo
                        title="Type:"
                        text={transaction?.data?.deposit?.type}
                      />
                      <DealInfo
                        title="Transaction Date:"
                        text={moment(
                          transaction?.data?.deposit?.created_at
                        ).format("MMM D, h:mm A")}
                      />
                      <DealInfo
                        title="Account Name:"
                        text={transaction?.data?.deposit?.account_name}
                      />
                    </div>
                    <DealInfo
                      title="Service Charge:"
                      text={transaction?.data?.wallet?.limit?.service_charge}
                    />
                    <DealInfo
                      title="Account No:"
                      text={transaction?.data?.deposit?.account_number}
                    />
                    <DealInfo
                      title="Total Amount:"
                      text={transaction?.data?.deposit?.amount}
                    />
                    <DealInfo
                      title="Bank:"
                      text={transaction?.data?.deposit?.bank_name}
                    />
                    <div className="w-[40%] pb-4 flex items-center gap-3">
                      <p className="text-xs text-grey-text">Status</p>
                      <Label label={transaction?.data?.deposit?.status} />
                    </div>

                    {isFailed && (
                      <div className="w-[40%] pb-4 flex items-center gap-3">
                        <p className="text-xs text-grey-text">Reason</p>
                        <Label label={transaction?.message} />
                      </div>
                    )}
                  </div>
                </div>
              </>
            </div>
          </div>
        </ControlledModal>
      )}
    </div>
  );
};

export default TransactionOverview;
