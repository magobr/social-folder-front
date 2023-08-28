import { object, string } from 'yup';

export const loginSchema = object({
    email: string().required("").email("Preencha com um e-mail válido"),
    password: string().required("")
});