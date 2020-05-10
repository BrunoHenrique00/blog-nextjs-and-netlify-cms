import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Contato(){
    return(
        <>
        <Nav />
        <Header />
        <div className="bg-indigo-800 flex h-screen content-start  justify-center items-center text-center flex-wrap p-10 flex-shrink">
            <h2 className="text-3xl bg-white rounded">Opa, se quiser falar comigo, trocar uma ideia ou fazer o próximo Uber (rsrs) zoas, me manda mensagem no Instagram: bruno__he</h2>
        </div>
        </>
    )
}