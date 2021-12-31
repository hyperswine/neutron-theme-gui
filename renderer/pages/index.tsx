import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Box } from '@chakra-ui/react'

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

  return (
    <Layout title="Neutron OS">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Hello neutron!</button>
      <p>
        <Link href="/about">
          <a>About Neutron</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
