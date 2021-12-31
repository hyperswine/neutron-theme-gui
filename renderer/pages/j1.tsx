import Window from "../components/Window"
import Draggable from "react-draggable"
import { Button, Card } from "react-bootstrap"

// ???? I really dunno

export default () => {
  return (
    <>
      <Draggable>
        <div>
          <Window/>
        </div>
      </Draggable>
    </>
  )
}