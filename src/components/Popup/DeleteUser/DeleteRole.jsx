import React, { useState } from "react";
import ControlledModal from "../../Modal/ControlledModal";

const DeletePopup = ({ close, title, message, id, action, button }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    close();
  };

  return (
    <>
      <div className="py-[14px] px-[21px] w-full text-left text-red-text" onClick={() => setOpen((o) => !o)}>
        Delete
      </div>
      <ControlledModal open={open} closeModal={closeModal}>
        <div className="px-[32px] py-6 min-w-[600px]">
          <p className="text-[16px] font-semibold mb-6">{title}</p>
          <p className="text-[16px] text-grey-text mb-11 w-[560px]">{message} </p>
          <div className="flex justify-end gap-4">
            <div className="text-primary px-3 py-2 bg-white border border-primary rounded-xl cursor-pointer" onClick={closeModal}>
              Cancel
            </div>
            <div className="bg-primary px-3 py-2 text-white rounded-xl cursor-pointer" onClick={() => action(id)}>
              {button}
            </div>
          </div>
        </div>
      </ControlledModal>
    </>
  );
};

export default DeletePopup;
