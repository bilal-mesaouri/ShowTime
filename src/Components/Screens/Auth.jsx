import React from 'react'
import '../auth.css'
import { useState,useContext } from 'react';
import { redirect,useNavigate } from 'react-router-dom';
import { auth } from '../../App';
function Auth() {

    const [inps, setInps] = useState({});
    const {isauth,setisauth}= useContext(auth);
    const navigate = useNavigate()
    const changeInps = (event)=>{
        console.log(event.target.name,event.target.value);
        setInps((prev)=>{ return {...prev,[event.target.name]:event.target.value}})
    }

    const onSearch = async () => {
      console.log(inps);
        console.log(isauth)
        setisauth(true);

        navigate('/Home')
        

    };
  return (
    <div className='auth_container'>
        <div className="Auth_box">
            <div className="app-bar-website-name">
                ShowTime
            </div>
            <div className="inps">
                <div>UserName : </div>
                <input type='text' name='username' onChange={changeInps} /><br/>
                <div>Password : </div>
                <input type='text' name='password' onChange={changeInps}/>
            </div>
            <div className="button">
                <button onClick={onSearch} >Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Auth