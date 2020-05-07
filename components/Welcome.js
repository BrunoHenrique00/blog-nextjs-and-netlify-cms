export default function Welcome(){
    return(
        <div className="flex-column sm:flex w-screen  flex-wrap">
            <div className="w-screen sm:w-3/6 bg-gray-800 p-10">
                <p className="text-center text-white">   
                    Bem vindo a minha página de blog, aqui eu vou documentar boa parte do meu aprendizado e talvez ajudar alguém que teve os mesmos problemas que eu, nessa caminhada na carreira de tecnologia.
                </p>
            </div>
            <div className="w-screen sm:w-3/6 text-center self-center p-10">
                <p className="">
                    Feito em NextJS, por... Bruno Henrique! ❤️ 
                </p> 
            </div>
        </div>
    )
}