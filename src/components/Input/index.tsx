import { Field, useField } from "formik"

type Props = {
    type: string
    name: string
    value?: string
    required?: boolean
    placeholder: string
    labelMessage?: string
}

export default function Input(props: Props) {

    const [, meta, {setValue}] = useField(props.name);

    return (
        <div className="generic_field">
            <Field
                className={meta.error ? 'error' : ''}
                type={props.type}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                name={props.name}
            />
            <div className="message_field">{meta.error}</div>
        </div>
    )
}