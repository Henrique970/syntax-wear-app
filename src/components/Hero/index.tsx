import Banner from "@/assets/images/banner.jpg"
import { Button } from "../Button"
import { Overlay } from "../Overlay"
import { Link } from "@tanstack/react-router"

export const Hero = () => {
    return (
        <div className="container">
            <section className=" relative h-125 rounded-[20px] mb-10">
                <img
                    src={Banner}
                    alt="Homem sentados com os tênis da Syntaxwear"
                    className="w-full h-full object-cover rounded-[20px]" />

                <Overlay
                    tittle="Krypton One"
                    subtittle="Transforme qualquer passo em presença"
                    ownClassName="bottom-0 px-6 md:px-24 pb-24 justify-end md:items-end">
                    <Link to="/products">
                        <Button variant="secondary">
                            Ver modelos
                        </Button>
                    </Link>
                    <Button>
                        Comprar
                    </Button>


                </Overlay>
            </section>
        </div>
    )
}