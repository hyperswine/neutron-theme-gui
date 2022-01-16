import { Box, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { Card, Button } from "react-bootstrap"

interface WindowProps {
  title: string,
  content: string,
  show: boolean
}

export default function Window(settings: WindowProps) {
  const [show, setShow] = useState(true)
  const [exist, setExist] = useState(true)

  // should prob have show in the parent too to completely hide this stuff?

  const handleMinimise = () => setShow(false)
  const handleClose = () => setExist(false)

  return (
    <>
      {show &&
        <Card style={{ width: '18rem' }}>
          <Button variant="primary" onClick={handleMinimise}>Minimise</Button>
          {/* close tells parent to */}
          <Button variant="primary" onClick={handleClose}>Close</Button>

          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{settings.title}</Card.Title>
            <Card.Text>
              <Flex>
                {settings.content}
              </Flex>
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </>
  )
}