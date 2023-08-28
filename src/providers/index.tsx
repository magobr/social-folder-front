'use client'
import FormLogin from "@/components/Forms/Login"

export const Providers = ({children}: {children: React.ReactNode}) =>{
    return(
        <>
            <FormLogin />
            {children}
        </>
    )    
}