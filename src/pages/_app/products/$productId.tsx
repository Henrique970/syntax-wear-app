import { createFileRoute, Link } from '@tanstack/react-router'

import { products } from '../../../mocks/products'
import formatCurrency from '../../../utils/currency-format'

export const Route = createFileRoute('/_app/products/$productId')({
    component: RouteComponent,
})

function RouteComponent() {

    const { productId } = Route.useParams()

    const filterProduct = products.find((product) => product.id === Number(productId))

    const originalPrice = filterProduct?.price ?? 0
    const discountPrice = originalPrice * 0.9

    const inInstallmentsPrice = originalPrice / 6

    return (
        <section className='container mb-10 pt-44 md:pt-54 pb-10 md:px-10  text-black'>
            <nav className='text-sm mb-15'>
                <Link to='/'>Home</Link> {""} / {""}
                <Link to='/products'>Produtos</Link>{""} / {""}
                {/* Usamos o ponto de interrogação para o caso de nosso dado for nulo, o código não irá quebrar. */}
                <span className='font-semibold'>{filterProduct?.name}</span>
            </nav>

            <div className='flex justify-center gap-10'>
                <img src={filterProduct?.image} alt={filterProduct?.name} className='w-125 bg-white rounded-2xl' />
            </div>

            <div>
                <h1 className='text-4xl font-bold mb-1'>{filterProduct?.name}</h1>

                <p>Cor: {filterProduct?.color}</p>

                <p className='line-through text-sm text-[#878787]'>
                    {formatCurrency(originalPrice)}
                </p>

                <p className='text-3xl font-bold mb-2'>{formatCurrency(discountPrice)} no PIX</p>

                <p className='text-sm text-[#878787]'>Você economiza: <span className='font-semibold'>10%</span></p>

                <p className='mb-2'>ou <span className='font-semibold'>6x</span> de{" "}<span className='font-semibold'>{formatCurrency(inInstallmentsPrice)}</span> </p>

                <p className='max-w-125 my-5'>{filterProduct?.description}</p>

                <div className='mb-6'>
                    <p className='text-sm'>Calcular o prazo de entrega</p>

                    <form className='flex gap-3'>
                        <input type="text" placeholder="Insira seu CEP"
                            className='border border-[#c0c0c0c0] rounded-md p-3' />

                        <button className='bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-900'>
                            Calcular
                        </button>
                    </form>
                </div>

                <button className='bg-black text-white w-full p-5 text-center rounded-md hover:bg-gray-900'>Adicionar ao Carrinho</button>
            </div>


        </section>
    )
}
