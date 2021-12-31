import Dragger from "../components/Drag"
import lol from "../public/assets/lol.jpg"

const holderStyle = { width: "100vw", height: "100vh" }
const pictureStyle = {
  backgroundImage: `url(${lol})`,
  width: "200px",
  height: "200px",
}

const { innerHeight, innerWidth } = window
const startingPosition = { x: innerWidth / 2 - 100, y: innerHeight / 2 - 100 }

export default () => {
  const {
    picturePosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = Dragger(startingPosition)

  return (
    <div style={holderStyle}>
      <div
        style={{
          ...picturePosition,
          ...pictureStyle,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  )
}