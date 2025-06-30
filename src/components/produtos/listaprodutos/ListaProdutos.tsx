import { useNavigate } from "react-router-dom";
import CardProdutos from "../cardprodutos/CardProdutos";
import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaProdutos() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
    setIsLoading(true);
    try {
        await buscar("/produtos", setProdutos);
        } catch (error: any) {
            console.log(error);
        }
    setIsLoading(false);
    }

    useEffect(() => {
    buscarProdutos();
    }, [produtos.length]);

    return (
        <>
        {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-6 gap-4'>
                        {produtos.map((produto) => (
                            <CardProdutos key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;