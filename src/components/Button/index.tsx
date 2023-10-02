type Props = {
    type: "button" | "submit" | "reset" | undefined
    value?: string
    content: string
    style?: "green" | "danger"
    onClick?: React.MouseEventHandler
}
export default function Button(props: Props) {
    return (
        <div className={`generic_btn ${props.style}`}>
            <button onClick={props.onClick} type={props.type} value={props.value}>{props.content}</button>
        </div>
    )
}