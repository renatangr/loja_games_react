import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"

function Home() {
    return (
        <>
            <div className="bg-slate-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra os melhores Games!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="/ImgHome.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 flex">
                 <ListaProdutos />
            </div>
           
        </>
    )
}

export default Home