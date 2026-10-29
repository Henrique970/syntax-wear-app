import { Link } from "@tanstack/react-router"
import { MdAddShoppingCart } from "react-icons/md"
import type { Product } from "../../interfaces/product"

interface ProductCarProps {
    product: Product
}

export const ProductCard = ({ product }: ProductCarProps) => {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md">
                <Link to="/products/$productId" params={{ productId: String(product.id) }}>
                    <img src={product.image} alt={product.name}
                        className="w-full max-h-100 object-cover rounded-md mb-2" />
                </Link>

                <div className="rounded-2xl p-4">
                    <h3 className="text-lg font-semibold">
                        {product.name}
                    </h3>

                    <p>{product.description}</p>

                    <div className="flex justify-between mt-2.5">
                        <p className="font-bold ">
                            R${product.price},00
                        </p>

                        <button className="cursor-pointer">
                            <MdAddShoppingCart className="h-7 w-7" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}