import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  color: dimgrey;
  z-index: 100;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 10px;
`

export default ({ children }) =>
  <ModalContainer>
    <Modal>
      {children}
    </Modal>
  </ModalContainer>
