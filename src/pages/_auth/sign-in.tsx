import { createFileRoute, Link } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import { Separator } from '../../components/Separator'
import GoogleIcon from '@/assets/images/icons/icon-google.png'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='text-black min-h-screen w-full flex items-start justify-center bg-[#f5f5f5] p-5'>
      <div className='w-112.5 bg-white rounded-2xl p-5 flex flex-col shadow-md'>
        <Logo />
        
        <h2 className='font-bold text-[21px] mb-2'>
          Entrar
        </h2>

        <p>Escolha como você gostaria de fazer o Login:</p>

        <button className='w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer'>
          <img src={GoogleIcon} alt="Ícone do google" className='w-5 h-5' />
          <span className='text-sm font-medium text-black'>Continuar com Google</span>
        </button>

        <Separator />
        <LoginForm />

        <p className='mt-3.5 text-center'>
          Ainda não possui uma conta? <Link to='/sign-up' className='text-[#5433eb] hover:underline'>Cadastre-se</Link>
        </p>
        
      </div>
    </section>
  )
}
