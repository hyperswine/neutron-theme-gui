import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import AppWindow from "./appwindow"

interface FavoritedApps {
  apps: Array<string>
}

const Dock = ({ apps }: FavoritedApps) => {
  return (
    <Flex flexDir="row" backgroundColor="blue" color="white" fontSize="1.2rem" justifyContent="center" p="2rem">
      {apps.map((m) => (
        <Box m="1rem" key={m}>
          {m}
        </Box>
      ))}
      {/* Temporary thing */}
      <Box>
        <AppWindow/>
      </Box>
    </Flex>
  )
}

export default Dock