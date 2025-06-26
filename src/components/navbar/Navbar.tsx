import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-slate-800 text-white'>
                
                <img 
                    src="/LogoIcon.png" 
                    alt="Icon de Video Game" 
                    className='w-12 h-12 justify-center'
                />

                <div className="container flex justify-between text-lg px-5 py-2">
                    
                    <Link to='/home' className="text-2xl font-bold">LOJA DE GAMES</Link>

                    <div className="flex gap-2">

                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="text-slate-800 w-xs px-4 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <button
                        className="flex justify-center items-center p-1.5 gap-2 
                                bg-teal-500 border border-teal-700 rounded-[8px]
                                cursor-pointer"
                        >
                        <MagnifyingGlassIcon size={24} color="#fff" />
                    </button>

                    </div>
                    

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <UserIcon size={32} weight='bold' />
                        <ShoppingCartIcon size={32} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar