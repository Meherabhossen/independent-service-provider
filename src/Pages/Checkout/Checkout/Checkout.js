import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Checkout.css';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNamelBlur = event =>{
        setName(event.target.value)
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event =>{
        setPhone(event.target.value);
    }
    

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
         
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Checkout Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label> <br />
                        <input onBlur={handleNamelBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label> <br />
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{color: 'orangered'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Checkout Info" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;