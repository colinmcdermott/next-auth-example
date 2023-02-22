import Layout from "/components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Publisher Indexing API Dashboard</h1>
      <p>
        Welcome to the Publisher Indexing API Dashboard.
      </p>
      <div>
        <h2>
          <a href="/docs">Get an API Key</a>
        </h2>
        <h2>
          <a href="/docs">Documentation</a>
        </h2>
        <h2>
          <a href="/api-example">API Example</a>
        </h2>
      </div>
    </Layout>
  )
}
