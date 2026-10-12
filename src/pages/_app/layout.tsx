// Utilitários do TanStack Router: createFileRoute para a rota e Outlet para renderizar rotas filhas
import { Outlet, createFileRoute } from '@tanstack/react-router'
// Componentes fixos compartilhados no layout
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// Define a rota do layout pai para o grupo '/_app'
export const Route = createFileRoute('/_app')({
  component: AppLayout,
})

// Layout base que envolve as páginas com cabeçalho, conteúdo da rota filha e rodapé
function AppLayout() {
  return (
    <div>
      <Header />
      {/* Outlet renderiza dinamicamente a rota filha atual */}
      <Outlet />
      <Footer />
    </div>
  )
}

