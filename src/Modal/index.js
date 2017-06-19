import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  height: 100vh;
  color: dimgrey;
  z-index: 100;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  overflow: auto;
  display: block;
`

const Modal = styled.div`
  background: white;
  border-radius: 3px;
  max-height: calc(100% - 100px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 700px) {
    width: 95%;
	}
`

const ModalContent = styled.div`
  padding: 10px;
`

const CloseIcon = styled.div`
  padding: 10px;
  cursor: pointer;
`

const ModalTitle = styled.div`
  padding: 10px;
  font-weight: bolder;
  font-size: 1.5em;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export default ({ children, handleClose }) =>
  <ModalContainer>
    <Modal>
      <ModalHeader>
        <ModalTitle>Modal Title</ModalTitle>
        <CloseIcon onClick={handleClose}>X</CloseIcon>
      </ModalHeader>
      <ModalContent>
        {children}
      </ModalContent>
    </Modal>
  </ModalContainer>
