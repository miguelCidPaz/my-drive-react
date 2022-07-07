import { Form } from "../Forms/Form"

export const ConfigExplorer = ({ id }) => {
    console.log(id);
    return (
        <div className="configexplorer--main">
            {id === 'login' ? <Form action={id} /> : null}
            {id === 'register' ? <Form action={id} /> : null}
            {!id ?
                <>
                    <div className="configexplorer--section">
                        {/*Buscador de opciones*/}
                    </div>
                    <div className="configexplorer--section">
                        {/*Vista de la opcion */}
                    </div>
                </>
                : null}
        </div>
    )
}