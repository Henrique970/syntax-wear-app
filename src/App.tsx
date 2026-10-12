// Importações do TanStack Router para gerenciar o roteamento
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./router-tree-gen"

// Cria a instância do roteador usando a árvore de rotas
const router = createRouter({ routeTree })

// Registra o tipo do roteador no TypeScript para garantir autocomplete e type-safety das rotas
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Componente principal que fornece o contexto de rotas para toda a aplicação
function App() {
  return <RouterProvider router={router} />
}

export default App