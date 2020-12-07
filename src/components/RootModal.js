import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { compose, branch, renderNothing } from 'recompose';
import UnfavoriteModal from './UnfavoriteModal';
// import ConfirmModal from './ConfirmModal';
import { hideModal } from '../actions/modals';

// const MODAL_TYPES = {
//   CONFIRM_MODAL: ConfirmModal,
// };
const MODAL_TYPES = {
  UNFAVORITE_RECIPE: UnfavoriteModal,
};

const RootModal = ({ modalType, modalProps, hideModal }) => {
  if (!modalType) {
    return null;
  }
  const Modal = MODAL_TYPES[modalType];

  return <Modal onClose={hideModal} {...modalProps} />;
};
/* eslint no-shadow: "off" */
// const RootModal = ({ modalType, modalProps, hideModal }) => {
//   const SpecificModal = MODAL_COMPONENTS[modalType];
//   return (
//     <SpecificModal
//       isOpen={modalType !== null}
//       onClose={hideModal}
//       {...modalProps}
//     />
//   );
// };

RootModal.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  hideModal: PropTypes.func,
};

const mapStateToProps = state => ({
  modalType: state.modals.modalType,
  modalProps: state.modals.modalProps,
});

export default connect(mapStateToProps, { hideModal })(RootModal);

// export default compose(
//   connect(state => state.modals, { hideModal }),
//   branch(props => !props.modalType, renderNothing),
// )(RootModal);
