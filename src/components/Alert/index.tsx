
type props = {
    message: string | undefined
    style: string
    show: boolean
}
export default function Alert (props: props){
    if (props.show){
        return(
            <div className={`generic_alert ${props.style} animate__animated animate__shakeX animate__faster`}>
                <span>{props.message}</span>
            </div>
        )
    } else {
        return <></>
    }
}