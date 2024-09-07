import React from 'react'
import './globals.css'
import Head from 'next/head';
export default function layout({children}:any) {
  return (
    <html lang='eng'>
      <body>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        
      </Head>
        {children}
      </body>
    </html>
  )
}
