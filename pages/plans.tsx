import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Layout from "../components/layout"

import type { GetServerSidePropsContext } from "next"
import type { Session } from "next-auth"

export default function ServerSidePage({ session }: { session: Session }) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  return (
    <Layout>
      <h1>Choose a plan</h1>
      <p>
        Choose a plan to get started.
      </p>

    <section>
        <div>
            <h2>Starter</h2>
            <p>&pound;99.99 per month</p>
            <p>For smaller publications</p>
            <div>
                <div>
                    <ul>
                    <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Indexing API</li>
                    <li><img src="/tick-green.svg" alt="" width="15" height="15" /> RSS &amp; sitemap polling</li>
                    <li><img src="/tick-green.svg" alt="" width="15" height="15" /> 10,000 API requests per month</li>
                    <li><img src="/tick-green.svg" alt="" width="15" height="15" /> 5 GB bandwidth</li>
                    <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Email support</li>
                    <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Onboarding support</li>
                    </ul>
                </div>
                <div>
                    <p><a href="/signup">Get started &rarr;</a></p>
                </div>
            </div>
        </div>
        <div>
        <h2>Pro</h2>
        <p>&pound;399.99 per month</p>
        <p>For mid-sized publications</p>
        <div>
        <div>
        <ul>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Indexing API</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> RSS &amp; sitemap polling</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> 100,000 API requests per month</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> 40 GB bandwidth</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Email &amp; phone support</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Onboarding support</li>
        </ul>
        </div>
        <div>
        <p><a href="/signup">Get started &rarr;</a></p>
        </div>
        </div>
        </div>
        <div>
        <h2>Enterprise</h2>
        <p>&pound;799.99 per month</p>
        <p>For large publications &amp; newspapers</p>
        <div>
        <div>
        <ul>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Indexing API</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> RSS &amp; sitemap polling</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> 275,000 API requests per month</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> 100 GB bandwidth</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Email &amp; phone support</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Onboarding support</li>
        <li><img src="/tick-green.svg" alt="" width="15" height="15" /> Success manager</li>
        </ul>
        </div>
        <div>
        <p><a href="/signup">Get started &rarr;</a></p>
        </div>
        </div>
        </div>
    </section>



    </Layout>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  }
}
