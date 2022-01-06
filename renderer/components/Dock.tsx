import { Box, Flex, Image } from "@chakra-ui/react"
import React from "react"
import AppWindow from "./appwindow"

export interface NeutronApp {
  name: string,
  component?: any,
  imgIcon?: any,
  // when press/open, see if its open already and whether multiple windows are allowed
  // if allowed, create a RnD component for that window component specified as component
  multipleOpen?: boolean,
  howManyOpened?: boolean, // check this in in parent, update it and pass to child to open (close in parent and update there)
}

const Dock = (apps: NeutronApp[]) => {
  return (
    <Flex flexDir="row" backgroundColor="blue" color="white" fontSize="1.2rem" justifyContent="center" p="2rem">
      {apps.map((m) => (
        <Box m="1rem" key={m.name}>
          {m.imgIcon}

          {/* Check if conditions are true, props are passed down again */}
          {m.component}
        </Box>
      ))}
      <Box>
        <AppWindow/>
      </Box>
    </Flex>
  )
}

export default Dock