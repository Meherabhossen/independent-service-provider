import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
        
    }
    if(user){
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex '>
                <hr className='w-50 mx-2' />or <hr className='w-50 mx-2' />
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-4'>
                    <img style={{ width: '25px' }} src="https://image.similarpng.com/thumbnail/2020/12/Google-Logo-isolated-premium-vector-PNG.png" alt="" />
                    <span className='px-3'>Google Sign in</span>
                </button>
                </div>
        </div>
    );
};

export default SocialLogin;