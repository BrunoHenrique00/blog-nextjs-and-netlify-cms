import Nav from '../../components/Nav'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

export const getStaticPaths = async () => {

    const files = fs.readdirSync('content/blog')
    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace(".md","")
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } } ) =>{

    const markdown = fs.readFileSync(path.join('content/blog', slug + '.md')).toString()
    const parsedMarkdown = matter(markdown)

    return({
        props:{
            data: parsedMarkdown.data
        }
    })
}

export default function Blog({data}){
    return(
        <>
        <Head>
            <title>{data.name}</title>
        </Head>
        <Nav />
        <div className="bg-indigo-800 flex h-screen content-start  justify-center items-center text-center flex-wrap p-10 px-3 flex-shrink ">
            <div className="text-center bg-white rounded m-3 w-full -m-8 sm:-m-0 " >
                <h2 className="self-auto m-2  px-2 w-auto inline-block rounded text-2xl shadow-md">{data.name}</h2>
                    <div className="max-w-xl m-auto">
                        <img src={data.thumbnail === null ? `` : `${data.thumbnail}`} className="m-auto object-fill object-center p-10 "/>
                    </div>
                    <p className="text-justify p-2 font-medium ">{data.description}</p>
                <p className="text-justify text-center p-2 mt-3 mb-3">{data.about}</p>
            </div>
        </div>
        </>
    )
}