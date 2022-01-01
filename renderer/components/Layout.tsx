import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title?: string
}

const _separator = ' | '

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {/* MAYBE NOT DEVICE WIDTH => half the width? */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link> {_separator}
        <Link href="/about">
          <a>About</a>
        </Link>{_separator}
        <Link href="/_bootstrapmodal">
          <a>Bootstrap Modal</a>
        </Link>{_separator}
        <Link href="/working">
          <a>Working Example</a>
        </Link>{_separator}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
