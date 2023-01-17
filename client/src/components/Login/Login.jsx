import React,{useState,useRef} from 'react'
import './Login.css'
import {Room,Cancel} from '@material-ui/icons';
import axios from 'axios'

const url = 'https://mern-travel-app.cyclic.app/api'

const Login = ({setShowLogin,myStorage,setCurrentUser}) => {
    
    const [error,setError] = useState(false)
    const nameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) =>{
        e.preventDefault() 
        const newUser = {
            username : nameRef.current.value,
            password : passwordRef.current.value,    
        };
       try {
            const res = await axios.post(`${url}/users/login`,newUser)
            myStorage.setItem("user", res.data.username)
            setCurrentUser(res.data.username)
            setShowLogin(false)
            setError(false)
            
       } catch (error) {
           
           setError(true)
       }

    };
    return (
        <div className="loginContainer">
            <div className="logo">
                <Room/>
                DkPin
            </div>

            <form onSubmit={handleSubmit}>

                <input type="text"  placeholder="Enter your username" ref={nameRef} /> 
                <input type="password" placeholder="password" ref={passwordRef}/>   
                <button className="loginBtn">Login</button>
               
                {error && 
                (<span className="failure">Something went wrong!</span>)}
            </form> 
            
            <Cancel className="loginCancel" onClick={()=> setShowLogin(false)}/>
        </div>
    )
}

export default Login
