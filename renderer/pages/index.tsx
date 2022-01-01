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

interface FavoritedApps {
  apps: Array<string>
}

const Dock = ({ apps }: FavoritedApps) => {
  return (
    <Flex flexDir="row" backgroundColor="blue" color="white" fontSize="1.2rem" justifyContent="center" w="50%">
      {apps.map((m) => (
        <Box m="1rem">
        {m}
        </Box>
        ))}
    </Flex>
  )
}


// Index Page = desktop
const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel -> electron
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const [favoritedApps, setFavoritedApps] = useState(Array<string>("Horizon Broswer", "Forgery", "Blender", "Apps", "Umbra Office", "File Browser"))

  return (
    <Grid h="100vh" templateRows='repeat(3, 1fr)' templateColumns='repeat(4, 1fr)'>
      <GridItem id="logo" rowSpan={1} colSpan={1}>Logo</GridItem>
      {/* Try colSpan 2 */}
      <GridItem id="right-header" rowSpan={1} colSpan={3}>Header</GridItem>

      <GridItem id="files" rowSpan={1} colSpan={1}>Files</GridItem>
      <GridItem id="reminders" rowSpan={1} colSpan={1}>Reminders</GridItem>
      <GridItem id="news" rowSpan={1} colSpan={1}>News</GridItem>
      <GridItem id="mail" rowSpan={1} colSpan={1}>Mail</GridItem>

      <GridItem id="dock" rowSpan={1} colSpan={4}>
        <Dock apps={favoritedApps} />
      </GridItem>
    </Grid>
  )
}

export default IndexPage
