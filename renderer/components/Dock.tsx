import { Box, Flex, Image } from "@chakra-ui/react"
import React, { useState } from "react"
import AppWindow from "./appwindow"
import { Globe, UmbrellaFill, Folder, App, Search } from "react-bootstrap-icons"
import Blender from "../public/assets/BlenderLogo.png"
import Forgery from "../public/assets/ForgeryLogo.png"
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'

export interface NeutronApp {
  name: string,
  component?: any,
  imgIcon?: any,
  multipleOpen?: boolean,
  howManyOpened?: boolean, // check this in in parent, update it and pass to child to open (close in parent and update there)
}

// TODO: functionality for each app is localised in the app itself.
// Its layout, animations, text
// NOW: for lower level stuff like accessing the OS, that will need a shared OS component
// NOW: for opening and communicating with other apps, will need a shared AppWindowManager component
// App Window for Settings
const Settings = () => {
  return (
    <Box p="1rem">
      <LoremIpsum />
    </Box>
  )
}

const SettingsTitle = () => {
  return (
    <Box>
      <Search />
    </Box>
  )
}

// TODO: put logic of opening/closing app icons in dock
// BUT put widget logic, opening/closing of files in index.js. Share that functionality with Dock by hooking onto some shared component or page?
// Yea some shared component

// When press/open, see if its open already and whether multiple windows are allowed
// If allowed, create a RnD component for that window component specified as component

const Dock = () => {
  const [apps, setApps] = useState(Array<NeutronApp>(
    { name: "Horizon", imgIcon: Globe, component: "Yes" },
    { name: "Umbra", imgIcon: UmbrellaFill, component: "YES" },
    { name: "Files", imgIcon: Folder, component: "YES" },
    { name: "Apps", imgIcon: App, component: "YES" }
  ))

  return (
    <Flex flexDir="row" backgroundColor="#0d7d9b" color="white" fontSize="1.2rem" justifyContent="center" p="1rem">
      {apps.map((m) => (
        <Box m="1rem" key={m.name}>
          {/* <Image src={m.imgIcon}/> */}
          <m.imgIcon size="2rem" />

          {/* Check if conditions are true, props are passed down again */}
          {/* {m.component} */}
        </Box>
      ))}
      <Box>
        <AppWindow AppComponent={<Settings />} TitleComponent={<SettingsTitle />} />
      </Box>
    </Flex>
  )
}

export default Dock