import Link from 'next/link'

export default function Nav(){
    return(
    <nav className="flex w-screen bg-indigo-900 h-20 font-mono font-text-6xl justify-between items-center text-white">
        <div className="text-2xl sm:text-3xl bg-indigo-800 h-auto ml-4 rounded p-1">
            <Link href="/">
                <h1>Simple Tech</h1>
            </Link>
        </div>
        <div className="">
            <ul className="flex mr-10 space-between space-x-3  rounded ">
                <li>
                    <a href="https://github.com/BrunoHenrique00" target="_blank">
                        <img src="/GitHub_Logo_White.png" style={{width:110, height:40}} className="hover:bg-gray-600 rounded"/>
                    </a>
                </li>
                    <img src="/user.png" style={{width:37, height:37}} className="hidden  sm:inline "/>
                <Link href='/sobre'>
                <li className="bg-indigo-800 hover:bg-gray-600 rounded p-2 hidden sm:inline">
                    Sobre
                </li>
                </Link>
                    <img src="/card.png" style={{width:43, height:43}} className="hidden sm:inline" />
                <Link href='/contato'>
                <li className="hidden sm:inline bg-indigo-800 hover:bg-gray-600 rounded p-2 h-auto">
                    Contato
                </li>
                </Link>
                <button type="button" className="sm:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                    <svg className="h-6 w-6 fill-current -m-3" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>

            </ul>
        </div>
    </nav>
    )
}