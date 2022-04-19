import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Resister.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Resister = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleResister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        createUserWithEmailAndPassword(email, password)
    }
    if(user){
        navigate('/home');
    }

    return (
        <div className='resister-form'>
            <h2>Please Resister</h2>
            <form onSubmit={handleResister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='email' required />

                <input type="password" name="password" id="" placeholder='password' required />
                <input className='w-50 btn btn-primary' type="submit" value="Resister" />
            </form>
            <p>Already have an account ? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Resister;