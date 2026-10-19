import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

// Schema principal de registro usando nonempty
export const registerUserFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty("O primeiro nome é obrigatório"),

  lastName: z
    .string()
    .trim()
    .nonempty("O último nome é obrigatório"),

  email: z
    .string()
    .trim()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),

  confirmPassword: z
    .string()
    .nonempty("A confirmação de senha é obrigatória"),

  cpf: z
    .string()
    .nonempty("O CPF é obrigatório")
    .refine((val) => isValidCPF(val), {
      message: "CPF inválido",
    }),

  cellphone: z
    .string()
    .trim()
    .nonempty("O telefone é obrigatório")
    .refine((val) => {
      const clean = val.replace(/\D/g, "");
      return clean.length >= 10 && clean.length <= 11;
    }, "Número de telefone inválido"),

  birthDate: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      const data = new Date(val);
      return !isNaN(data.getTime()) && data <= new Date();
    }, "Data de nascimento inválida"),

}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não conferem",
  path: ["confirmPassword"],
});

// Tipo TypeScript inferido automaticamente
export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        // Valores padrão para os formulários
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            cpf: "",
            birthDate: "",
            cellphone: ""
        },
        criteriaMode: "all"
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset
    }
}