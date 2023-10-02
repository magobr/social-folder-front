import { object, string } from 'yup';

export const cadastroSchema = object({
    name: string().required("Preencha com seu Nome"),
    email: string().required("Preencha com um e-mail").email("Preencha com um e-mail válido"),
    nickname: string().required("Crie um apelido unico"),
    password: string().required("Crie uma senha forte")
});