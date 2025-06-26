import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import { buscarCategoriaNome } from "../../services/Service";
import { useState } from "react";

function Navbar() {

    const [termoBusca, setTermoBusca] = useState("");
    const navigate = useNavigate();

    const handleBuscar = () => {
        if (termoBusca.trim() !== "") {
        buscarCategoriaNome(termoBusca, (res: any) => {
            console.log("Categorias encontradas:", res)
            navigate(`/categorias?nome=${encodeURIComponent(termoBusca)}`)
        });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
        handleBuscar();
        }
    };

      return (
        <>
        <div className="w-full flex justify-center py-4 bg-slate-800 text-white">
            <img
            src="/LogoIcon.png"
            alt="Icon de Video Game"
            className="w-12 h-12 justify-center"
            />

            <div className="container flex justify-between text-lg px-5 py-2 items-center">
            <Link to="/home" className="text-2xl font-bold">
                LOJA DE GAMES
            </Link>

            <div className="flex gap-2">
                <input
                type="text"
                placeholder="Buscar..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                onKeyDown={handleKeyDown}
                className="text-slate-800 px-4 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                onClick={handleBuscar}
                className="flex justify-center items-center p-1.5 gap-2 
                            bg-teal-500 border border-teal-700 rounded-[8px]
                            cursor-pointer"
                >
                <MagnifyingGlassIcon size={24} color="#fff" />
                </button>
            </div>

            <div className="flex gap-4 items-center">
                Produtos
                <Link to="/categorias" className="hover:underline">
                Categorias
                </Link>
                <Link to="/cadastrarcategoria" className="hover:underline">
                Cadastrar Categoria
                </Link>
                <UserIcon size={32} weight="bold" />
                <ShoppingCartIcon size={32} weight="bold" />
            </div>
            </div>
        </div>
        </>
  );
}

export default Navbar;