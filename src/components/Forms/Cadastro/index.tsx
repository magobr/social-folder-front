import FormValidation from "@/components/Forms/FormValidation"
import ButtonLoginSocial from "@/components/ButtonLoginSocial";
import { socialFolder } from "@/ultils/apis/socialFolder"
import { cadastroSchema } from "@/schemas/Cadastro"
import Input from "@/components/Input"
import Button from "@/components/Button";
import Alert from "@/components/Alert";

import { useCookies } from "react-cookie";
import { BiLogoGoogle, BiLogoFacebook } from "react-icons/bi";
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

export default function FormCadastro() {
    const [cookies, setCookie] = useCookies(['SOCIAL_USER']);
    const router = useRouter();

    useEffect(()=>{
        if(cookies.SOCIAL_USER){
          router.push("/user", {
              locale: true,
              shallow: false
          });
        }
    },[])
    
    type messageData = {
        email?: string,
        password?: string,
        geral?: string
    }

    const minuto = 60;
    const hora = minuto * 60;
    const dia = hora * 24

    let [errorMessage, setErrorMessage] = useState<messageData>({
        email: "",
        password: "",
        geral: ""
    })

    let [alertShow, setAlertShow] = useState(false)
    let [alertStyle, setAlertStyle] = useState("")

    type userData = {
        name: string,
        email: string,
        nickname: string,
        password: string
    }

    const initialValues = {
        email: null,
        password: null
    }

    const submitContact = async (data: userData) => {
        socialFolder.post("/user", {
            name: data.name,
            email: data.email,
            nickname: data.nickname,
            password: data.password
        })
        .then(response => {
            if(!response.data.error){
                console.log(response.data);
            }

            router.push("/user");
        })
        .catch(err =>{
            if (err.hasOwnProperty('response')){
                setErrorMessage({
                    geral: err.response.data.message,
                })
                setAlertShow(true)
                setAlertStyle("error")
            } else {
                setErrorMessage({
                    geral: "Ocorreu um erro, por favor tente novamente mais tarde!",
                })
                setAlertShow(true)
                setAlertStyle("error")
            }

        })
    };

    return(
        <div className={"form__login"}>
            <h1>Cadastre-se</h1>
            <FormValidation handleSubmit={submitContact} initialValues={initialValues} validationSchema={cadastroSchema}>
                <Alert
                    style={alertStyle}
                    message={errorMessage.geral}
                    show={alertShow}
                />
                <Input
                    placeholder="Nome"
                    type="text"
                    name="name"
                    labelMessage={errorMessage.email}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    name="email"
                    labelMessage={errorMessage.password}
                />
                <Input
                    placeholder="Nickname"
                    type="text"
                    name="nickname"
                    labelMessage={errorMessage.email}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    labelMessage={errorMessage.password}
                />
                <div className={'button_area'}>
                    <Button type="submit" value="Cadastrar" content="Cadastrar" style={"green"}/>
                    <Button onClick={()=> router.back() } type="button" value="voltar" content="voltar" style={"danger"}/>
                </div>
            </FormValidation>
        </div>
    )    
}