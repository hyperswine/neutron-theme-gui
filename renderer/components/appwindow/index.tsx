import { Flex, Box } from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"
import Draggable from "react-draggable"
import { Rnd } from "react-rnd"
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'

// represents an icon
const Icon = () => {
    return (
        <></>
    )
}

interface AppIconProps {
    icon: any,
    animation: any
}

// basically the icon itself and any animations when you hover and click it
const AppIcon = ({ icon, animation }: AppIconProps) => {
    return (
        <>
            {icon}
        </>
    )
}

interface AppWindowProps {
    title: string,
    appIcon: AppIconProps,
    // hook into this with a tsx component
    component: any,
}

// basically a draggable 'card'
// spawns in the middle -> TODO: spawn in the middle of the screen
const AppWindow = (component: any) => {
    const [show, setShow] = useState(true)
    const [exist, setExist] = useState(true)

    const handleMinimise = () => setShow(false)
    const handleClose = () => setExist(false)

    // at first should not be shown

    return (
        <Box>
            {show &&
                <Rnd>
                    <Flex backgroundColor="gray" p="0.5rem" w="100%" h="100%" flexDir="column">
                        <Flex className="app-titlebar" flexDir="row" justifyContent="flex-end" w="100%" backgroundColor="#2F3C56">
                            <Button variant="outline-light" onClick={handleMinimise} >Minimise</Button>
                            <Button variant="outline-light" onClick={handleClose}>Close</Button>
                        </Flex>
                        <Box color="black">
                            <LoremIpsum p={3}/>
                        </Box>
                    </Flex>
                </Rnd>}
        </Box>
    )
}

export default AppWindow
