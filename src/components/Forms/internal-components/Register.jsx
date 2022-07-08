export const Register = ({ action }) => {

    const handleForm = (event) => {
        const { name, pass, email, biography } = event
        event.preventDefault();

    }

    return (
        <form className="form--body" onSubmit={handleForm}>
            <label>
                <p>name:</p>
                <input type="text" name="name" id="name" />
            </label>
            <label>
                <p>pass:</p>
                <input type="password" name="pass" id="pass" />
            </label>
            <label>
                <p>email:</p>
                <input type="email" name="email" id="pass" />
            </label>
            <label>
                <p>bio:</p>
                <textarea name="biography" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}