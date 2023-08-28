import FormValidation from "../FormValidation"
import { socialFolder } from "@/ultils/apis/socialFolder"
import { loginSchema } from "@/schemas/Login"
import Input from "@/components/Input"
import Button from "@/components/Button";
import Alert from "@/components/Alert";

import { useState } from 'react';

export default function FormLogin() {

    type messageData = {
        email?: string,
        password?: string,
        geral?: string
    }

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
                setErrorMessage({
                    geral: response.data.message,
                })
                setAlertShow(true)
                setAlertStyle("success")
            }
        })
        .catch(err =>{
            console.log(err)
            setErrorMessage({
                geral: err.response.data.message,
            })
            setAlertShow(true)
            setAlertStyle("error")
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
        </div>
    )    
}