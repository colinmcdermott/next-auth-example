import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Publisher Indexing API Dashboard</h1>
      <p>
        Welcome to the Publisher Indexing API Dashboard.
      </p>
      <div>
        <h2>Getting started</h2>

        <h3>
          <a href="https://astro.pubindexapi.com/pricing/">Choose a plan & get API Key</a>
        </h3>
        <h3>
          <a href="/docs">Documentation</a>
        </h3>
        <h3>
          <a href="/api-example">API Example</a>
        </h3>

      </div>
    </Layout>
  )
}
