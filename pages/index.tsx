import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Publisher Indexing API Dashboard</title>
        <meta name="color-scheme" content="dark light" />
        <link rel='canonical' href='https://app.pubindexapi.com/' />
      </Head>
      <Layout>
        <h1>Publisher Indexing API Dashboard</h1>
        <p>
          Welcome to the Publisher Indexing API Dashboard.
        </p>
        <div>
          <h2>Getting started</h2>

          <h3>
            <Link href="/plans/">Choose a plan & get API Key</Link>
          </h3>
          <h3>
            <a href="/docs/">Documentation</a>
          </h3>
          <h3>
            <a href="/api-example/">API Example</a>
          </h3>

        </div>
      </Layout>
    </>
  )
}
