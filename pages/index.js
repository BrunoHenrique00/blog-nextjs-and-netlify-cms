import Head from 'next/head'
import { Component } from 'react'
import Nav from '../components/Nav'
import MeusPosts from '../components/MeusPosts'
import Welcome from '../components/Welcome';



export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Simple Tech</title>
        <link rel="icon" href="/writing.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link href="../main.css" rel="stylesheet" />

      </Head>

      <Nav />
  
      <Welcome />

      <MeusPosts />
      
    </div>
    
  )
}
