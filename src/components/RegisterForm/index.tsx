import { useRegisterForm } from "./register-form.schema"

export const RegisterForm = () => {
    const { handleSubmit, register, errors, isSubmitting } = useRegisterForm()

    return (
        <form onSubmit={handleSubmit(() => undefined)}>
            {/* Campo de E-mail */}
            <div>
                <label htmlFor="email" className="text-xs text-gray-600">
                    E-mail<span className="text-red-500">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("email")}
                />

                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            {/* Campo de Senha */}
            <div>
                <label htmlFor="password" className="text-xs text-gray-600">
                    Senha<span className="text-red-500">*</span>
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("password")}
                />

                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </div>

            {/* Campo de Confirmar senha */}
            <div>
                <label htmlFor="confirmPassword" className="text-xs text-gray-600">
                    Confirmar senha<span className="text-red-500">*</span>
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("confirmPassword")}
                />

                {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Campo de Nome */}
            <div>
                <label htmlFor="firstName" className="text-xs text-gray-600">
                    Nome<span className="text-red-500">*</span>
                </label>
                <input
                    id="firstName"
                    type="text"
                    placeholder="Digite seu nome"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("firstName")}
                />

                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
            </div>

            {/* Campo de Sobrenome */}
            <div>
                <label htmlFor="lastName" className="text-xs text-gray-600">
                    Sobrenome<span className="text-red-500">*</span>
                </label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Digite seu sobrenome"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("lastName")}
                />

                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
            </div>

            {/* Campo de CPF */}
            <div>
                <label htmlFor="cpf" className="text-xs text-gray-600">
                    CPF<span className="text-red-500">*</span>
                </label>
                <input
                    id="cpf"
                    type="text"
                    placeholder="Digite seu CPF"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("cpf")}
                />

                {errors.cpf && <p className="text-xs text-red-500 mt-1">{errors.cpf.message}</p>}
            </div>

            {/* Campo de Data de nascimento */}
            <div>
                <label htmlFor="birthDate" className="text-xs text-gray-600">
                    Data de nascimento
                </label>
                <input
                    id="birthDate"
                    type="date"
                    placeholder="dd/mm/aaaa"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("birthDate")}
                />

                {errors.birthDate && <p className="text-xs text-red-500 mt-1">{errors.birthDate.message}</p>}
            </div>

            {/* Campo de Celular */}
            <div>
                <label htmlFor="cellphone" className="text-xs text-gray-600">
                    Celular<span className="text-red-500">*</span>
                </label>
                <input
                    id="cellphone"
                    type="tel"
                    placeholder="Digite seu celular"
                    className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus-ring-2 ${errors.cellphone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5344eb]"}`}
                    {...register("cellphone")}
                />

                {errors.cellphone && <p className="text-xs text-red-500 mt-1">{errors.cellphone.message}</p>}
            </div>

            <button disabled={isSubmitting} className="bg-[#5433eb] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 w-full mt-4 cursor-pointer">
                {isSubmitting ? "Enviando..." : "Continuar"}
            </button>
        </form>
    )
}