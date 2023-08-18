import { useState } from "react"


export default function Login(){
    const [username, setUsername] = useState('')
    const [password , setPassword] = useState('');
    function login(ev){
        ev.preventDefault()
    }
    return(
        <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev=> setPassword(ev.target.value)}
             />
      <button>Login</button>
    </form>
    )
}