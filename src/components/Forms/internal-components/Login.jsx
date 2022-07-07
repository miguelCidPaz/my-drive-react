export const Login = () => {
    return (
        <form className="form--body">
            <label>
                <p>name</p>
                <input type="text" name="name" id="name" />
            </label>
            <label>
                <p>pass</p>
                <input type="password" name="pass" id="pass" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}