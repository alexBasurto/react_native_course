import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'tucorreo@google.com',
            password: '123456'
    }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log(myForm);
    }

    console.log(watch('email'));

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input type="text" placeholder="Email" { ...register('email', {required: true})} />
                    <input type="text" placeholder="password" { ...register('password', {required: true}) }/>
                    <button type="submit">Enviar</button>
                </div>
            </form>

            <pre>
                {JSON.stringify(formState.defaultValues, null, 2)}
                {JSON.stringify(watch('email'), null, 2)}
                {JSON.stringify(watch('password'), null, 2)}
            </pre>
        </>
    );
    }