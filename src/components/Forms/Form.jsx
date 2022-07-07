import { Login } from "./internal-components/Login";
import { Register } from "./internal-components/Register";

export const Form = ({ action }) => {

    const whatForm = () => {
        switch (action) {
            case 'login':
                return <Login />

            case 'register':
                return <Register />

            case 'modify':
                return <Register action={action} />

            default:
                return <Login />
        }
    }

    return (
        <div className="form--main">
            {whatForm()}
        </div>
    )
}