import { useState } from "react";
import axios from "axios";
import { authRedirect } from "../../middlewares/authRedirect";

const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSub = async (e) => {
        e.preventDefault()
        try{
            console.log('loading')
            const {data: {msg}} = await axios.post('/api/auth/register',{email,password})
            console.log(msg)
    
        }catch(err){
            console.log(err.message)
        }
        setEmail('')
        setPassword('')
    }

    return <>
        <form onSubmit={handleSub}>
           <label htmlFor="email">email</label>
            <input type="text" placeholder="email" autoFocus required id="email" onChange={e => setEmail(e.target.value)} value={email}/><br />
          <label htmlFor="password">password</label>
            <input type="text" placeholder="email" autoFocus required id="password" onChange={e => setPassword(e.target.value)} value={password}/><br/>
            <button>register</button>
        </form>
        <Link href={'/auth/login'}>Login</Link>
        </> 
}
 
export default Register;

export async function getServerSideProps(context){

    authRedirect(context)

    return {props : {}}
}