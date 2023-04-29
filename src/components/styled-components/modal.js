import styled from "styled-components"

export const Modal = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 100%;
  height: 100%;
  outline: 0;
  padding-right: 17px;
  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContainer = styled.div`
  position: relative;
  width: auto;
  margin: 1.75rem auto;
  max-width: 350px;
  transform: none;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-clip: padding-box;
  background-color: #333;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background-color: rgba(0, 0, 0, 0.4);
`
export const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem 1rem;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.2);
`
export const ModalTitle = styled.h5`
  line-height: 1.5;
  margin-bottom: 0;
`
Modal.Container = ModalContainer
Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Title = ModalTitle

export default Modal