import Layout from "../components/layout"

export default function ApiExamplePage() {
  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>RSS Feed</h2>
      <p>/api/feed</p>
      <iframe src="https://feedping.dev/api/feed?feed=http://feeds.bbci.co.uk/news/uk/rss.xml" />
    </Layout>
  )
}
