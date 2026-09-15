
// Cada imagem importada vira um valor que pode ser usado no atributo `src`.
// O alias `@/` aponta para a pasta `src`, evitando caminhos relativos longos.
import galeriaHomem from "@/assets/images/galeria-homem.jpg"
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg"
import galeriaModelo from "@/assets/images/galeria-modelo.jpg"
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg"
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg"
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg"
import { Button } from "../Button"

export const Gallery = () => {
    return (
        // A galeria usa CSS Grid para montar um mosaico responsivo.
        // `grid-template-areas` define o desenho do mosaico usando nomes.
        // No mobile existem duas colunas; a partir de `md`, passam a existir quatro.
        <section className="container grid grid-cols-2 grid-rows-[360px_180px_180px_180px_180px] gap-3 mb-10 [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple'] sm:grid-rows-[500px_250px_250px_250px_250px] md:grid-cols-[repeat(4,1fr)] md:grid-rows-[repeat(3,300px)] md:gap-7.5 md:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']">
            {/* `group` permite que os filhos reajam ao hover do bloco inteiro. */}
            <div className="group relative [grid-area:highlight] overflow-hidden rounded-[20px]">
                {/* `size-full` preenche o bloco; `object-cover` evita distorção da imagem. */}
                <img src={galeriaHomem} alt="Modelo masculino usando tênis SyntaxWear" className="size-full object-cover" />

                {/* A sobreposição fica sempre visível no mobile e aparece no hover em telas maiores. */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-center text-white opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
                    <p className="mb-1 text-lg">Krypton One</p>
                    <p className="mb-4 text-2xl">Estilo urbano com atitude</p>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="sm">Feminino</Button>
                        <Button variant="secondary" size="sm">Masculino</Button>
                    </div>
                </div>
            </div>

            {/* O nome em `grid-area` precisa corresponder a um nome usado no template acima. */}
            <div className="[grid-area:sneaker-purple] overflow-hidden rounded-[20px]">
                <img src={galeriaTenisRoxo} alt="Tênis roxo SyntaxWear" className="size-full object-cover" />
            </div>

            {/* Cada item abaixo ocupa uma área diferente do mosaico. */}
            <div className="[grid-area:model] overflow-hidden rounded-[20px]">
                <img src={galeriaModelo} alt="Modelo feminina usando tênis SyntaxWear" className="size-full object-cover" />
            </div>

            <div className="[grid-area:sneaker-color] overflow-hidden rounded-[20px]">
                <img src={galeriaTenisColorido} alt="Tênis colorido SyntaxWear" className="size-full object-cover" />
            </div>

            <div className="[grid-area:sneaker-white] overflow-hidden rounded-[20px]">
                <img src={galeriaTenisBrancoPreto} alt="Tênis preto e branco SyntaxWear" className="size-full object-cover " />
            </div>

            <div className="[grid-area:sneaker-silver] overflow-hidden rounded-[20px]">
                <img src={galeriaTenisCinza} alt="Tênis cinza SyntaxWear" className="size-full object-cover" />
            </div>
        </section>
    )
}