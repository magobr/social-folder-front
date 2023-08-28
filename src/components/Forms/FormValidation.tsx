import {Form, Formik} from "formik"

type props = {
    handleSubmit: any
    action?: string
    children: any
    initialValues: any
    validationSchema: any
}

export default function FormValidation(props: props) {
    const {handleSubmit, children, initialValues, validationSchema} = props
    
    return(
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>        
                    {children}
                </Form>
            </Formik>
        </>
    )    
}