import { useNavigate } from "react-router-dom";
import CardCategorias from "../cardcategorias/CardCategorias";
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaCategorias() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categoria, setCategoria] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategoria)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categoria.length])

    return (
        <>
            {isLoading && (
                <DNA

					visible={true}

					height="200"

					width="200"

					ariaLabel="dna-loading"

					wrapperStyle={{}}

					wrapperClass="dna-wrapper mx-auto"

				/>
            )

            }
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">

                        {
                            (!isLoading && categoria.length === 0) && (
                                <span className="text-3xl text-center my-8">Nenhuma categoria foi encontrada.</span>
                            )
                        }

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                categoria.map((categoria) => (
                                    <CardCategorias key={categoria.id} categoria={categoria} />
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;