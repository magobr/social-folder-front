import Link from "next/link";
import { HiHome, HiBell, HiMail, HiUser, HiOutlineLogout} from "react-icons/hi"
import { useCookies } from "react-cookie";
import { useRouter } from 'next/navigation';

type props = {
    userName: string,
    userPhoto?: string,
    userNickname: string,
}

export default function Menu (props: props) {
    const [cookies, setCookie, removeCookie] = useCookies(['SOCIAL_USER']);
    const router = useRouter();

    function logout() {
        removeCookie('SOCIAL_USER');
        router.push("/");
    }
    
    return (
        <nav className={"menu"}>
            <div className={"menu__user"}>
                <div className={"itens__menu"}>
                <Link href={""}>
                    <div className={"item__menu"}>
                        <div className={"item__menu_icon"}><HiHome className={"icon__menu"}/></div>
                        <div className={"item__menu_name"}>Home</div>
                    </div>
                    <div className={"item__outline"}></div>
                </Link>

                <Link href={""}>
                    <div className={"item__menu"}>
                        <div className={"item__menu_icon"}><HiBell className={"icon__menu"}/></div>
                        <div className={"item__menu_name"}>Notificação</div>
                    </div>
                    <div className={"item__outline"}></div>
                </Link>

                <Link href={""}>
                    <div className={"item__menu"}>
                        <div className={"item__menu_icon"}><HiMail className={"icon__menu"}/></div>
                        <div className={"item__menu_name"}>Mensagens</div>
                    </div>
                    <div className={"item__outline"}></div>
                </Link>

                </div>

                <div className={"itens__user"}>
                    <div className={"item__user perfil__user"}>
                        <Link href={""}>
                            <div className={"item__user_icon"}>{
                                !props.userPhoto
                                    ? <HiUser />
                                    : props.userPhoto
                            }</div>
                            <div className={"item__user_name"}>{props.userName}</div>
                        </Link>
                    </div>
                    <div className={"item__user plus__link"}><Link href={""}>+ Link</Link></div>
                    <div className={"item__user plus__link"}><Link href={""} onClick={()=> logout()}><HiOutlineLogout className={"icon_logout"}/></Link></div>
                </div>
            </div>
        </nav>
    )
}