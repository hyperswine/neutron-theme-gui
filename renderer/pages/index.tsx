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
  Text,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { BrowserWindow } from 'electron'
import Draggable from 'react-draggable'
import Window from '../components/Window'
import useScrollBlock from '../components/ScrollBlock'
import Dock, { NeutronApp } from "../components/Dock"
import SpectroLogo from "../public/assets/SpectroIcon.png"
import { CloudLightningRainFill, FileEarmarkText, Tag, CircleFill, Newspaper, Envelope } from 'react-bootstrap-icons'

// Index Page = desktop
const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel -> electron
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  // also no scrolling allowed
  const [blockScroll, allowScroll] = useScrollBlock()
  blockScroll()

  return (
    // need 19 columns!
    <Grid h="100vh" templateRows='repeat(11, 1fr)' templateColumns='repeat(4, 1fr)'>
      <GridItem id="logo" rowSpan={1} colSpan={1}>
        <Image src="assets/SpectroIcon.png" h="4rem" />

      </GridItem>
      <GridItem id="right-header" rowSpan={1} colSpan={3}>
        <Flex backgroundColor="gray" h="2rem" flexDir="row" justifyContent="center" pt="0.25rem">
          <Text fontFamily="sans-serif">Jan 9th 2021, 7:08AM</Text>
          <Text pl="4.5rem" fontFamily="sans-serif">Sydney, Australia</Text>
          <Text pl="4.5rem" fontFamily="sans-serif"><strong>80°F</strong> Thunderstorms <CloudLightningRainFill /></Text>
        </Flex>
      </GridItem>

      <GridItem id="files" rowSpan={9} colSpan={1}>
        <Flex flexDir="column" mt="1rem" p="1rem">
          <Box pb="1.5rem">
            <FileEarmarkText size={55} />
          </Box>
          <Box pb="1.5rem">
            <FileEarmarkText size={55} />
          </Box>
          <Box pb="1.5rem">
            <Tag size={55} />
          </Box>
        </Flex>
      </GridItem>
      <GridItem id="reminders" rowSpan={9} colSpan={1}>
        <Flex backgroundColor="gray" minH="5rem" mr="2rem" flexDir="column">
          <Text justifySelf="center" textAlign="center" pt="0.5rem" fontSize="1.25rem">
            <strong>
              Reminders
            </strong>
          </Text>
          <Flex justifyItems="center" flexDir="column">
            {/* TODO: generate the Box circlefills dynamically and randomly select a color */}
            <Box pt="1.5rem"></Box>
            <Flex pl="1.5rem" pb="0.9rem" flexDir="row">
              <Box>
                <CircleFill color='green' size={55} />
              </Box>
              <Text ml="1.5rem" mr="1.5rem"> Remember to take your meds at 8pm! </Text>
            </Flex>
            <Box pl="1.5rem" pb="0.9rem">
              <CircleFill color='purple' size={55} />
            </Box>
            <Box pl="1.5rem" pb="0.9rem">
              <CircleFill color='yellow' size={55} />
            </Box>
            <Box pt="1.5rem"></Box>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem id="news" rowSpan={9} colSpan={1}>
        <Flex backgroundColor="gray" minH="5rem" mr="2rem" flexDir="column">
          <Text justifySelf="center" textAlign="center" pt="0.5rem" fontSize="1.25rem">
            <strong>
              News
            </strong>
          </Text>
          <Flex justifyItems="center" flexDir="column">
            {/* TODO: generate the Box circlefills dynamically and randomly select a color */}
            <Box pt="1.5rem"></Box>
            <Flex pl="1.5rem" pb="0.9rem" flexDir="row">
              <Box>
                <Newspaper size={55} />
              </Box>
              <Text ml="1.5rem" mr="1.5rem"> So about Covid 19... for the 2000th time </Text>
            </Flex>
            <Box pl="1.5rem" pb="0.9rem">
              <Newspaper size={55} />
            </Box>
            <Box pl="1.5rem" pb="0.9rem">
              <Newspaper size={55} />
            </Box>
            <Box pt="1.5rem"></Box>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem id="mail" rowSpan={9} colSpan={1}>
        <Flex backgroundColor="gray" minH="5rem" mr="2rem" flexDir="column">
          <Text justifySelf="center" textAlign="center" pt="0.5rem" fontSize="1.25rem">
            <strong>
              Mail
            </strong>
          </Text>
          <Flex justifyItems="center" flexDir="column">
            {/* TODO: generate the Box circlefills dynamically and randomly select a color */}
            <Box pt="1.5rem"></Box>
            <Flex pl="1.5rem" pb="0.9rem" flexDir="row">
              <Box>
                <Envelope size={55} />
              </Box>
              <Text ml="1.5rem" mr="1.5rem"> I like your rocket idea. From Elon.Musk@tesla.com </Text>
            </Flex>
            <Box pl="1.5rem" pb="0.9rem">
              <Envelope size={55} />
            </Box>
            <Box pl="1.5rem" pb="0.9rem">
              <Envelope size={55} />
            </Box>
            <Box pt="1.5rem"></Box>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem id="docker-left" rowSpan={1} colSpan={1}></GridItem>
      <GridItem id="dock" rowSpan={1} colSpan={2}>
        <Dock />
      </GridItem>
      <GridItem id="docker-right" rowSpan={1} colSpan={1}></GridItem>
    </Grid>
  )
}

export default IndexPage
