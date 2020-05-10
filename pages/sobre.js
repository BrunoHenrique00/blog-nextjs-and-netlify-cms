import Nav from "../components/Nav";
import Header from "../components/Header";

export default function Contato(){
    return(
        <>
        <Header />
        <Nav />
        <div className="bg-indigo-800 flex h-screen content-start  justify-center items-center text-center flex-wrap p-10 flex-shrink">
            <h2 className="text-3xl bg-white rounded">Foi mal, ainda não tenho uma página sobre...</h2>
        </div>
        </>
    )
}