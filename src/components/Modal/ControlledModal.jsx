import Popup from 'reactjs-popup';

const ControlledModal = ({
  children,
  open,
  closeModal,
  contentStyle,
  ...rest
}) => {
  return (
    <Popup
      onClose={closeModal}
      open={open}
      modal
      overlayStyle={{ background: 'rgba(0, 25, 53, 0.20)' }}
      lockScroll
      // nested
      contentStyle={{
        maxHeight: '90%',
        borderRadius: '12px',
        backgroundColor: 'white',
        width: 'fit-content',
        boxShadow: 'none',
        overflow: 'hidden',
        margin: 'auto',
        maxWidth: '350px',
      }}
    >
      {children}
    </Popup>
  );
};

export default ControlledModal;
