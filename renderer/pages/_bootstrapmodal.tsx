import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import styled from "styled-components"
import Draggable from "react-draggable"

const ModalStyle = styled(Box)`
.modal-dialog {
  transform: translate(0px, 0px);
}
`

export default function J2() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Box>
      <Draggable>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </Draggable>

      <Draggable>
        <div>
          <Modal show={show} onHide={handleClose} id="modal-1">
            <Modal.Header closeButton style={{ cursor: "move" }}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Draggable>
    </Box>
  )
}
