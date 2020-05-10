import Head from 'next/head'

export default function Header(){
    return(
        <Head>
            <title>Simple Tech</title>
            <link rel="icon" href="/writing.png" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            <link href="../styles/input.css" rel="stylesheet" />
            <meta name='description' content='Blog sobre programacao e tecnologias atuais' />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
        </Head>
    )
}