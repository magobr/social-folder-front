import Menu from "@/components/User/Menu";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/navigation';

interface User {
    email: string
    id: string
    name: string
    nickname: string
}


export default function User() {
    const [cookies, setCookie] = useCookies(['SOCIAL_USER']);
    const [userCookies, setUserCookies] = useState<User>({
        email: "",
        id: "",
        name: "",
        nickname: ""
    });
    
    const router = useRouter();

    const fetchData = async () => {
        let response: any = await fetch('http://localhost:3001/auth/decode-user', {
            credentials: 'include',
            headers: {
                Cookie: `SOCIAL_USER=${cookies.SOCIAL_USER}`
            }
        });

        response = await response.json();
        
        if (response.error) {
            router.replace("/")
        } else {
            setUserCookies(response);    
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    if (userCookies.email == "") {
        return <></>
    } else {
        return (
            <main>
                <Menu
                    userName={userCookies.name}
                    userNickname={userCookies.nickname}
                />
                <h1>User</h1>
            </main>
        )
    }    
}