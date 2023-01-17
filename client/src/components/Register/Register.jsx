import React,{useState,useRef} from 'react'
import './Register.css'
import {Room, Cancel} from '@material-ui/icons';
import axios from 'axios'

const url = 'https://mern-travel-app.cyclic.app/api'

const Register = ({setShowRegister}) => {
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()


    const handleSubmit = async (e) =>{
        e.preventDefault() 
        const newUser = {
            username : nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,    
        };
       try {
            await axios.post(`${url}/users/register`,newUser)
            setError(false)
            setSuccess(true)
       } catch (error) {
           
           setError(true)
       }

    };

    return (
        <div className="registerContainer">
            <div className="logo">
                <Room/>
                DkPin
            </div>

            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Enter your username"  ref={nameRef}/> 
                <input type="email"  placeholder="Enter your email"  ref={emailRef}/>
                <input type="password" placeholder="password" ref={passwordRef}/>   
                <button className="registerBtn">Signup</button>
                {success && 
                 (<span className="success">Successful.You can login now</span>)}
                
                {error && 
                (<span className="failure">Something went wrong!</span>)}
            </form> 
            
            <Cancel className="registerCancel" onClick={()=>setShowRegister(false)}/>
        </div>
    )
}

export default Register
