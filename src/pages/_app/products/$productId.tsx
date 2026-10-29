import { createFileRoute, Link } from '@tanstack/react-router'

import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/$productId')({
    component: RouteComponent,
})

function RouteComponent() {

    const { productId } = Route.useParams()

    const filterProduct = products.find((product) => product.id === Number(productId))

    const originalPrice = filterProduct?.price ?? 0
    const discountPrice = originalPrice * 0.9

    return (
        <section className='container mb-10 pt-44 md:pt-54 pb-10 md:px-10 bg-surface text-black'>
            <nav className='text-sm mb-5'>
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
                    {originalPrice}
                </p>

                <p>{discountPrice}</p>

            </div>


        </section>
    )
}
