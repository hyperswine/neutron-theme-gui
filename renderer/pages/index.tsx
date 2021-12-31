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
} from '@chakra-ui/react'
import { BrowserWindow } from 'electron'


const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel -> electron
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'HI FROM NEUTRON')
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout title="Neutron OS">
      <h1>Hello Next.js</h1>
      <button onClick={onSayHiClick}>Hello neutron!</button>
      <Box>
        <Link href="/about">
          <a>About Neutron</a>
        </Link>
      </Box>
      <Box m="2rem" p="2rem" backgroundColor="blue" id="modal-shower">
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />

          <ModalContent>
            <Box backgroundColor="red">

              <Flex flexDir="row">
                <ModalCloseButton />
              </Flex>

              <ModalHeader>Modal Title</ModalHeader>
              <ModalBody>
                HI, BYE
              </ModalBody>
            </Box>
          </ModalContent>
        </Modal>

      </Box>
    </Layout>
  )
}

export default IndexPage
