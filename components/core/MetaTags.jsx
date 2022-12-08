import React from 'react'
import Head from 'next/head'
import { SITE } from 'config/baseConfig'

export default function MetaTags() {
  return (
    <React.Fragment>
        <Head>
            <title>
                {SITE.title}
            </title>
	  <meta content='width=device-width'/>
	  <link rel='icon' href="/favicon.ico"/>
            <meta name='description' content={SITE.description} />
        </Head>
    </React.Fragment>
  )
}
