import React from "react";
import { X } from "react-feather";
import { ModalOverlay, ModalContent, ModalCloseIcon } from "./Modal.styles";

// Modal component
function Modal(props: any) {
  // Rendering the modal
  return (
    // Handling click outside the modal to close it
    <ModalOverlay onClick={() => (props.onClose ? props.onClose() : "")}>
      {/* Preventing clicks inside modal from closing it */}
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ModalCloseIcon>
          <X onClick={() => props.onClose()} className="closeIcon" />
        </ModalCloseIcon>
        {props.children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
