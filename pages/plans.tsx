import { useState } from "react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Layout from "../components/layout"
import styles from "../components/plans.module.css"

import type { GetServerSidePropsContext } from "next"
import type { Session } from "next-auth"

export default function ServerSidePage({ session }: { session: Session }) {
    const [currency, setCurrency] = useState("GBP")
  
    const handleCurrencyChange = (newCurrency: string) => {
      setCurrency(newCurrency)
    }
  
    // Set + Define the prices in GBP and USD
    type Prices = {
        [key: string]: {
          starter: string;
          pro: string;
          enterprise: string;
        };
      }
      
      const prices: Prices = {
        GBP: {
          starter: "£99.99",
          pro: "£399.99",
          enterprise: "£799.99",
        },
        USD: {
          starter: "$129.99",
          pro: "$499.99",
          enterprise: "$999.99",
        },
      };
      
      const getPrice = (plan: "starter" | "pro" | "enterprise") => {
        return prices[currency][plan];
      };
  
    // As this page uses Server Side Rendering, the `session` will be already
    // populated on render without needing to go through a loading stage.
    return (
    <Layout>

      <h1>Choose a plan</h1>
      <p>
        Need help choosing a plan? <a href="https://pubindexapi.com/contact/">Contact us here</a>.
      </p>
      <p>View prices in: <button onClick={() => handleCurrencyChange("USD")}>USD</button> <button onClick={() => handleCurrencyChange("GBP")}>GBP</button></p>

    <div className={styles.plansContainer}>
        <div>
            <h2>Starter</h2>
            <p>{getPrice("starter")} per month</p>
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
                    <p><a href="https://pubindexapi.test.onfastspring.com/starter" rel="nofollow">Checkout &rarr;</a></p>
                </div>
            </div>
        </div>
        <div>
            <h2>Pro</h2>
            <p>{getPrice("pro")} per month</p>
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
                    <p><a href="https://pubindexapi.test.onfastspring.com/pro" rel="nofollow">Checkout &rarr;</a></p>
                </div>
            </div>
        </div>
        <div>
            <h2>Enterprise</h2>
            <p>{getPrice("enterprise")} per month</p>
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
                    <p><a href="https://pubindexapi.test.onfastspring.com/enterprise" rel="nofollow">Checkout &rarr;</a></p>
                </div>
            </div>
        </div>
    </div>

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
