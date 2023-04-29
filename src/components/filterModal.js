import Modal from "./styled-components/modal"
import { StyledLink } from "./styled-components/commonElements"
export const FilterModal = (props) => {
  const handleModalClick = (e) => e.stopPropagation()
  const { isOpen, closeModal } = props
  return (
    <Modal isOpen={isOpen} onClick={closeModal}>
      <Modal.Container onClick={handleModalClick}>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Filters</Modal.Title>
            <StyledLink to="#" onClick={closeModal}>
              <i className="fas fa-times" />
            </StyledLink>
          </Modal.Header>
          <Modal.Body>{props.children}</Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  )
}