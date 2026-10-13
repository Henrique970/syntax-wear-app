import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '../../components/RegisterForm'

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='text-black'>
      <h1>
        Rota de Registro
      </h1>
      <RegisterForm />
    </section>
  )
}
