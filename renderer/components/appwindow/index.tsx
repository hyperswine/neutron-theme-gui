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

// basically a draggable 'card's
// spawns in the middle -> TODO: spawn in the middle of the screen
const AppWindow = ({AppComponent, TitleComponent}) => {
    const [show, setShow] = useState(true)
    const [exist, setExist] = useState(true)

    const handleMinimise = () => setShow(false)
    const handleClose = () => setExist(false)

    const handleKeyPress = (e) => {
        if(e.which === 37) {
            console.log("left clicked");
        }
    }

    // at first should not be shown

    // capture win + >

    return (
        <Box onKeyPress={handleKeyPress}>
            {show &&
                <Rnd minWidth="50%" maxWidth="100%" dragHandleClassName="app-titlebar">
                    <Flex backgroundColor="#072229" p="0.5rem" w="100%" h="100%" flexDir="column" overflowY="scroll">
                        <Flex className="app-titlebar" flexDir="row" justifyContent="flex-end" w="100%" backgroundColor="#04151a">
                            {TitleComponent}
                            <Box mr="15rem"></Box>
                            <Button variant="outline-light" onClick={handleMinimise} >Minimise</Button>
                            <Button variant="outline-light" onClick={handleClose}>Close</Button>
                        </Flex>
                        <Box color="black" className="content-area">
                            {AppComponent}
                        </Box>
                    </Flex>
                </Rnd>}
        </Box>
    )
}

export default AppWindow
