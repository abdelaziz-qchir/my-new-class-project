import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    function valider (){
        setVisible(true)
    }
    return(
        <>
        <div className="login">
        <h1>Login</h1>
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="mail"/><br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"/><br />
        <input type="button" value="valider" onClick={valider} />
        {visible && (email === '' || password === '' ? (<h3>no data</h3>) : (<> <h3>{email}</h3> <h3>{password}</h3> </>) )}
        </div>
        </>
    )
}

export default Login;