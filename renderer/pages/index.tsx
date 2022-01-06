import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import {
  Flex,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { BrowserWindow } from 'electron'
import Draggable from 'react-draggable'
import Window from '../components/Window'
import useScrollBlock from '../components/ScrollBlock'
import Dock, { NeutronApp } from "../components/Dock"
import { Globe, UmbrellaFill, Folder, App } from "react-bootstrap-icons"
import Blender from "../public/assets/BlenderLogo.png"
import Forgery from "../public/assets/ForgeryLogo.png"

// Index Page = desktop
const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel -> electron
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const [favoritedApps, setFavoritedApps] = useState([{name: "Horizon Broswer", imgIcon: Globe}, {name: "Forgery", imgIcon: Forgery}, {name: "Blender", imgIcon: Blender}, {name: "Apps", imgIcon: App}, {name: "Umbra Office", imgIcon: UmbrellaFill}, {name: "Files", imgIcon: Folder}])

  // also no scrolling allowed
  const [blockScroll, allowScroll] = useScrollBlock()
  blockScroll()

  return (
    // need 19 columns!
    <Grid h="100vh" templateRows='repeat(11, 1fr)' templateColumns='repeat(4, 1fr)'>
      <GridItem id="logo" rowSpan={1} colSpan={1}>Logo</GridItem>
      <GridItem id="right-header" rowSpan={1} colSpan={3}>Header</GridItem>

      <GridItem id="files" rowSpan={9} colSpan={1}>Files</GridItem>
      <GridItem id="reminders" rowSpan={9} colSpan={1}>Reminders</GridItem>
      <GridItem id="news" rowSpan={9} colSpan={1}>News</GridItem>
      <GridItem id="mail" rowSpan={9} colSpan={1}>Mail</GridItem>

      <GridItem id="docker-left" rowSpan={1} colSpan={1}></GridItem>
      <GridItem id="dock" rowSpan={1} colSpan={2}>
        <Dock apps={favoritedApps} />
      </GridItem>
      <GridItem id="docker-right" rowSpan={1} colSpan={1}></GridItem>
    </Grid>
  )
}

export default IndexPage
