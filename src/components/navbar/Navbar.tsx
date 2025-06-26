import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-slate-800 text-white'>
                
                <img 
                    src="/LogoIcon.png" 
                    alt="Icon de Video Game" 
                    className='w-10'
                />

                <div className="container flex justify-between text-lg px-5 py-2">
                    
                    <Link to='/home' className="text-2xl font-bold">LOJA DE GAMES</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        Carrinho
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar