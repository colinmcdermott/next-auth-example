import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Head from 'next/head'
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"

export default function ProtectedPage() {
  const { data: session } = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])
 

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <>
      <Head>
        <title>Docs - PubIndexAPI</title>
        <meta name="color-scheme" content="dark light" />
        <link rel='canonical' href='https://app.pubindexapi.com/docs' />
      </Head>
      <Layout>
        <h1>Docs</h1>
        <p>
          Welcome to the Publisher Indexing API Documentation.
        </p>
        <p>
          We are still building this page, please return soon.
        </p>
        <h2>Getting started</h2>
        <h2>API Routes</h2>
      </Layout>
    </>
  )
}
