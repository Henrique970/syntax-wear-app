// Utilitário do TanStack Router para definir rotas baseadas em arquivos
import { createFileRoute } from '@tanstack/react-router'
// Componentes visuais das seções da página inicial
import { Hero } from '../../components/Hero'
import { Categories } from '../../components/Categories'
import { Gallery } from '../../components/Gallery'

// Cria e exporta a definição da rota para o caminho '/_app/' (página inicial)
export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
})

// Componente que renderiza a estrutura e as seções da página
function RouteComponent() {
  return (
    <>
      <main className="py-10">
        <Hero />
        <Categories />
        <Gallery />
      </main>
    </>
  )
}

