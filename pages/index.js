import Head from 'next/head'
import { Component } from 'react'
import Nav from '../components/Nav'
import MeusPosts from '../components/MeusPosts'
import Welcome from '../components/Welcome';



export default function Home() {

  return (
    <div className="">
      <Head>
<<<<<<< HEAD
        <title>Simple Tech</title>
        <link rel="icon" href="" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link href="../main.css" rel="stylesheet" />
=======
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
>>>>>>> a530a9efe52d5d921746340e3778ee9ee18933f0

      </Head>

      <Nav />
  
      <Welcome />

      <MeusPosts />
      
    </div>
    
  )
}
