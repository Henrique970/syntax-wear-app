export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-3.5 bg-amber-500">
            <input type="email" placeholder="E-mail" />
            <button className="bg-[#212A2F] w-full p-3.5 rounded-[1px] cursor-pointer text-white">Continuar</button>
        </form>
    )
}