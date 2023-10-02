import Link from "next/link";
import { HiHome, HiBell, HiMail, HiUser} from "react-icons/hi"

type props = {
    userName: string,
    userPhoto?: string,
    userNickname: string,
}

export default function Menu (props: props) {
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
                </div>
            </div>
        </nav>
    )
}