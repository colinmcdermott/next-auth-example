import { useState } from "react"
import { getServerSession } from "next-auth/next"
import Head from 'next/head'
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
          starter: "$119.99",
          pro: "$499.99",
          enterprise: "$979.99",
        },
      };
      
      const getPrice = (plan: "starter" | "pro" | "enterprise") => {
        return prices[currency][plan];
      };
  
    // As this page uses Server Side Rendering, the `session` will be already
    // populated on render without needing to go through a loading stage.
    return (
        <>
            <Head>
                <title>Plans - PubIndexAPI</title>
                <meta name="color-scheme" content="dark light" />
                <link rel='canonical' href='https://app.pubindexapi.com/plans/' />
                <meta name="robots" content="noindex" />
            </Head>

            <Layout>

            <h1>Choose a plan</h1>
            <p>
                Need help choosing a plan? <a href="https://pubindexapi.com/contact/">Contact us here</a>.
            </p>

            <p>View prices in: <button className={styles.currencyButton} onClick={() => handleCurrencyChange("USD")}>$ USD</button> <button className={styles.currencyButton} onClick={() => handleCurrencyChange("GBP")}>£ GBP</button></p>

            <div className={styles.plansContainer}>
                <div className={styles.card}>
                    <h2>Starter</h2>
                    <p><strong>{getPrice("starter")}</strong> per month</p>
                    <p>For smaller publications</p>
                    <div>
                        <div>
                            <ul>
                                <li>Indexing API</li>
                                <li>RSS &amp; sitemap polling</li>
                                <li>10,000 API requests per month</li>
                                <li>5 GB bandwidth</li>
                                <li>Email support</li>
                                <li>Onboarding support</li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.button}><a href="https://pubindexapi.test.onfastspring.com/starter" rel="nofollow">Checkout &rarr;</a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2>Pro</h2>
                    <p><strong>{getPrice("pro")}</strong> per month</p>
                    <p>For mid-sized publications</p>
                    <div>
                        <div>
                            <ul>
                                <li>Indexing API</li>
                                <li>RSS &amp; sitemap polling</li>
                                <li>100,000 API requests per month</li>
                                <li>40 GB bandwidth</li>
                                <li>Email &amp; phone support</li>
                                <li>Onboarding support</li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.button}><a href="https://pubindexapi.test.onfastspring.com/pro" rel="nofollow">Checkout &rarr;</a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2>Enterprise</h2>
                    <p><strong>{getPrice("enterprise")}</strong> per month</p>
                    <p>For large publications &amp; newspapers</p>
                    <div>
                        <div>
                            <ul>
                                <li>Indexing API</li>
                                <li>RSS &amp; sitemap polling</li>
                                <li>275,000 API requests per month</li>
                                <li>100 GB bandwidth</li>
                                <li>Email &amp; phone support</li>
                                <li>Onboarding support</li>
                                <li>Success manager</li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.button}><a href="https://pubindexapi.test.onfastspring.com/enterprise" rel="nofollow">Checkout &rarr;</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <p>Prices shown do not include VAT or local taxes. Payment and subscription processing is handled by FastSpring.</p>

            <p>You can cancel or manage your subscription at any time from the Fast Spring billing dashboard.</p>


            </Layout>
        </>
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
