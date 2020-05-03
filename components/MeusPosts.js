import { attributes } from '../content/home.md';
import Link from 'next/link'


export default function MeusPosts({Posts}){

    let { title, posts } = attributes;


    return(
     <>
     <div className="text-center w-screen p-1">
        <h2 className="bg-gray-800 text-white w-auto p-2 mt-5 inline-block rounded text-4xl">{title}</h2>
     </div>
     <div className=" flex justify-between m-10 flex-wrap ">
        <img src="/bate-papo.png" style={{height: 160, width: 160 }} className="m-auto p-2  rounded "/>
        <p className="m-auto w-64 rounded  p-4 shadow-md">Nesta área de posts vou comentar sobre as tecnologias atuais e as que eu, particularmente uso!</p>
     </div> 

     <div className="bg-indigo-800 flex w-screen justify-center items-center text-center flex-wrap p-10 flex-shrink">   
      
      
        <ul className="flex-wrap max-w-2xl">
          {posts.map((post, k) => (
            <li className="text-center bg-white rounded m-3 " key={k}>
              <h2 className="self-auto m-2  px-2 w-auto inline-block rounded text-2xl shadow-md">{post.name}</h2>
              <p className="text-justify p-2 font-light">{post.description}</p>
              <Link as={`/${k}`} href='/[slug]'>
                <button className="m-3">
                  <span className="text-white rounded p-1 bg-gray-800">
                  Leia mais...
                  </span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
    )
}
