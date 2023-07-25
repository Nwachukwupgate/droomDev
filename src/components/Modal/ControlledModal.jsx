import Popup from 'reactjs-popup';

const ControlledModal = ({ children, open, closeModal, ...rest }) => {
  return (
    <Popup
      onClose={closeModal}
      open={open}
      modal
      overlayStyle={{ background: 'rgba(0, 25, 53, 0.20)' }}
      lockScroll
      // nested
      contentStyle={{
        // marginRight: 0,
        // maxHeight: '90%',
        padding: 0,
        // borderRadius: '12px',
        backgroundColor: 'white',
        width: 'fit-content',
        boxShadow: 'none',
        overflow: 'hidden',
        // marginBottom: 0,
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 'calc(100vh - 124.5px)',
      }}
    >
      {children}
    </Popup>
  );
};

export default ControlledModal;
