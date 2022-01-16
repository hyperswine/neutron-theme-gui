import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Flex } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  title?: string
}

const _separator = ' | '

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
  <Box>
    {children}
  </Box>
  </>
)

export default Layout
