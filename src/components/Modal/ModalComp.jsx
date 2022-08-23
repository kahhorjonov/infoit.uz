import PropTypes from 'prop-types';
import { Modal } from '@mui/material';
import MDBox from 'components/MDBox';

function ModalComp({ children, status, onClose, width = '50%' }) {
  const style = {
    width,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };

  return (
    <Modal
      open={status}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <MDBox sx={style}>{children}</MDBox>
    </Modal>
  );
}

ModalComp.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  status: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalComp;
