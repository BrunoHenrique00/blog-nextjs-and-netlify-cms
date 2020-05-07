import Head from 'next/head'
import { Component } from 'react'
import Nav from '../components/Nav'
import MeusPosts from '../components/MeusPosts'
import Welcome from '../components/Welcome';
import fs from 'fs'
import matter from 'gray-matter'


export const getStaticProps = async () =>{

  const files = fs.readdirSync('content/blog')
  {/*Puxa o conteudo dos posts */}
  const posts = files.map(file =>{
    const markdown = fs.readFileSync(`content/blog/${file}`).toString()
    const parsedMarkdown = matter(markdown)

    return({
            data: parsedMarkdown.data
          }
        )
    })

  return{
    props:{
      paths: files.map(file => file.replace('.md', '')),
      posts: posts
      }
    }
}


export default function Home({paths,posts}) {
  return (
    <div className="">
      <Head>
        <title>Simple Tech</title>
        <link rel="icon" href="/writing.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link href="../styles/input.css" rel="stylesheet" />
        <meta name='description' content='Blog sobre programacao e tecnologias atuais' />

      </Head>

      <Nav />
  
      <Welcome  />

      <MeusPosts posts={posts} paths={paths}/>
      
    </div>
    
  )
}
