import { useRegisterForm } from "./register-form.schema"

export const RegisterForm = () => {
    const { handleSubmit, register, errors, isSubmitting, setError, reset } = useRegisterForm()

    return (
        <form>
            {/* Campo de E-mail */}
            <div>
                <label>E-mail</label>
                <input type="email" {...register("email")} />

                {errors.email?.message}
            </div>
        </form>
    )
}