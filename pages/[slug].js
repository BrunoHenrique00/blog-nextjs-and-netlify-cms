import {useRouter} from 'next/router'
import { attributes } from '../content/home.md';


export default function Blog(props){
    const router = useRouter()
    let { title, posts } = attributes;

    return(
        <>
        <div className="bg-indigo-800 flex h-screen content-start  justify-center items-center text-center flex-wrap p-10 flex-shrink">
        {posts.map( function (post,index){
            
            if(index == router.query.slug){
                return(
                    <li className="text-center bg-white rounded m-3 " key={index}>
                        <h2 className="self-auto m-2  px-2 w-auto inline-block rounded text-2xl shadow-md">{post.name}</h2>
                        <img src={post.thumbnail === null ? `` : `${post.thumbnail}`} className="m-auto"/>
                        <p className="text-justify p-2 font-medium ">{post.description}</p>
                        <p className="text-justify text-center p-2 mt-3 mb-3">{post.about}</p>
                    </li>
                )
            }else{
                
            }
        })}
        </div>
        </>
    )
}

