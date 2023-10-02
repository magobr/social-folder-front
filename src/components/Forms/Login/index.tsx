import FormValidation from "@/components/Forms/FormValidation"
import ButtonLoginSocial from "@/components/ButtonLoginSocial";
import { socialFolder } from "@/ultils/apis/socialFolder"
import { loginSchema } from "@/schemas/Login"
import Input from "@/components/Input"
import Button from "@/components/Button";
import Alert from "@/components/Alert";

import { useCookies } from "react-cookie";
import { BiLogoGoogle, BiLogoFacebook } from "react-icons/bi";
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

export default function FormLogin() {
    const [cookies, setCookie] = useCookies(['SOCIAL_USER']);
    
    const router = useRouter();

    useEffect(()=>{
        if(cookies.SOCIAL_USER){
            router.push("/user", {
                locale: true,
                shallow: false
            });

            // const USER = useContext(cookies.SOCIAL_USER);
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

    type loginData = {
        email: string,
        password: string
    }

    const initialValues = {
        email: null,
        password: null
    }

    const submitContact = async (data: loginData) => {
        socialFolder.post("/auth", {
            email: data.email,
            password: data.password
        })
        .then(response => {
            if(!response.data.error){
                setCookie("SOCIAL_USER", response.data.token, {
                    path: "/",
                    maxAge: dia * 30
                });
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
            <FormValidation handleSubmit={submitContact} initialValues={initialValues} validationSchema={loginSchema}>
                <Alert
                    style={alertStyle}
                    message={errorMessage.geral}
                    show={alertShow}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    name="email"
                    labelMessage={errorMessage.email}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    labelMessage={errorMessage.password}
                />
                <a href={"#"}>Esqueceu a senha?</a>
                <Button type="submit" value="Login" content="Login" style={"green"}/>
            </FormValidation>

            <div className={"login__social__area"}>
                <div className={"buttons"}>
                    <ButtonLoginSocial
                        icon={<BiLogoGoogle className={"icons__social"}/>}
                        background_color={"var(--main-google)"}
                        style={""}
                        heft={""}
                        label={"Google"}
                    />

                    <ButtonLoginSocial
                        icon={<BiLogoFacebook className={"icons__social"}/>}
                        background_color={"var(--main-facebook)"}
                        style={""}
                        heft={""}
                        label={"Facebook"}
                    />
                </div>
            </div>

            <div className={"sigin"}>
                <a href={"#"}>Cadastre-se</a>
            </div>
        </div>
    )    
}