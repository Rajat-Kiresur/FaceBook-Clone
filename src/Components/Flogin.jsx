import React from 'react';
import './Facebook.css';
import {Link} from 'react-router-dom';

function Flogin() {
    return(
        <div className='main'>
            <div className='right'>
                <h2 className='head'>facebook</h2>
                <p className='bottom'>Facebook helps you connect and share <br/> with the people in your life.</p>

            </div>


            <div className='left'>
                <form className='form'>
                    <input type='email' placeholder='Email address or phone number' size={40} className='email'/><br></br>
                    <input type='password' placeholder='Password' size={40} className='pass'/><br></br>
                    <button className='btn'><Link to="/Fhome" className='text-link'>Log in</Link></button>
                    <p className='fp'>Forgotten Password?</p>
                    <button className='btn2'><Link to="/Fsignup" className='text-link'>Create new account</Link></button>
                    <p className='bottomline'><b>Create a Page </b>&nbsp;for a celebrity, brand or business.</p>
                </form>

            </div>
            
        
        </div>
    )
    
}
export default Flogin;


