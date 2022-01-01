import Window from "../components/Window"
import Draggable from "react-draggable"
import { Button, Card } from "react-bootstrap"
import { Box } from "@chakra-ui/react"

import ScrollBlock from "../components/ScrollBlock"

// ???? I really dunno

export default () => {
  const [blockScroll, allowScroll] = ScrollBlock()

  const handleAllow = () => {
    allowScroll()
  }

  const handleDisallow = () => {
    blockScroll()
  }

  return (
    <Box backgroundColor="blue">
      <Button onClick={handleAllow}>ALLOW SCROLLING</Button>
      <Button onClick={handleDisallow}>DISALLOW SCROLLING</Button>

      <Box h="100vh" w="50vw" backgroundColor="red" axis="both">
        <Draggable>
          <div>
            <Window />
          </div>
        </Draggable>
      </Box>
    </Box>
  )
}