import Link from "next/link"

type Props = {
    heft: string,
    style: string,
    background_color: string,
    label: string,
    icon?: any,
}

export default function ButtonLoginSocial(props: Props) {

    const styles = {
        background: props.background_color
    }

    return(
        <Link href={props.heft} className={"container__social_btn"}>
                <div
                    className={"icon__social"}
                    style={styles}
                >{props.icon}</div>
                <div
                    className={`social_btn ${props.style}`}
                    style={styles}
                >Entre com {props.label}</div>
        </Link>
    )
}

