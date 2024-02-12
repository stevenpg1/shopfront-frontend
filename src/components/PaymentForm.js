import React, { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import BasketContext from '../store/basket-context';
import classes from './PaymentForm.module.css';

const isEmpty = value => value.trim() === '';

const PaymentForm = () => {
    const ctx = useContext(BasketContext);
    const navigate = useNavigate();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
        email: true,
        cardNumber: true,
        cvv: true,
        expiryDate: true
    });

    const nameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const cardNumberRef = useRef();
    const cvvRef = useRef();
    const expiryDateRef = useRef();

    const submitOrderHandler = async (event) => {
        event.preventDefault();

        const enteredNameIsValid = !isEmpty(nameRef.current.value);
        const enteredAddressIsValid = !isEmpty(addressRef.current.value);
        const enteredEmailIsValid = !isEmpty(emailRef.current.value);
        const enteredCardNumberIsValid = !isEmpty(cardNumberRef.current.value);
        const enteredCVVIsValid = !isEmpty(cvvRef.current.value);
        const enteredExpiryDateIsValid = !isEmpty(expiryDateRef.current.value);

        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            email: enteredEmailIsValid,
            cardNumber: enteredCardNumberIsValid,
            cvv: enteredCVVIsValid,
            expiryDate: enteredExpiryDateIsValid,
        });

        let formIsValid = false;
        // for(var key in formInputsValidity)
        // {
        //     console.log(`${key}: `, formInputsValidity[key]);
        //     if (formInputsValidity[key] === false) {
        //         formIsValid = false;
        //         break;
        //     }
        // }
        if (
            enteredNameIsValid &&
            enteredAddressIsValid &&
            enteredEmailIsValid &&
            enteredCardNumberIsValid &&
            enteredCVVIsValid &&
            enteredExpiryDateIsValid 
            ) {
                formIsValid = true;
            }
        
        console.log('form validity: ', formIsValid);

        if (formIsValid) {    
            const userData = {
                customerName: nameRef.current.value,
                customerAddress: addressRef.current.value,
                customerEmail: emailRef.current.value,
                orderStockItems: ctx.items
            }
    
            saveOrder(userData);    
        }  

        
    };

const saveOrder = async (userData) => {
    let data = null;
    try {
        const response = await fetch('http://localhost:5045/api/orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                customerName: userData.customerName,
                customerAddress: userData.customerAddress,
                customerEmail: userData.customerEmail,
                orderStockItems: userData.orderStockItems
            })
        });
        data = response.json();
        ctx.clear();

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

  return (
    <form className={classes.form} onSubmit={submitOrderHandler}>
        <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameRef} />
            {!formInputsValidity.name && <p>Please enter a name</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.address ? '' : classes.invalid}`}>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' ref={addressRef} />
            {!formInputsValidity.address && <p>Please enter an address</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.email ? '' : classes.invalid}`}>
            <label htmlFor='email'>Email Address</label>
            <input type='text' id='email' ref={emailRef} />
            {!formInputsValidity.email && <p>Please enter an email address</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.cardNumber ? '' : classes.invalid}`}>
            <label htmlFor='cardNumber'>Card Number</label>
            <input type='text' id='cardNumber' ref={cardNumberRef} />
            {!formInputsValidity.cardNumber && <p>Please enter a card number</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.cvv ? '' : classes.invalid}`}>
            <label htmlFor='cvv'>CVV</label>
            <input type='text' id='cvv' ref={cvvRef} />
            {!formInputsValidity.cvv && <p>Please enter a CVV</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.expiryDate ? '' : classes.invalid}`}>
            <label htmlFor='expiryDate'>Card Expiry</label>
            <input type='text' id='expiryDate' ref={expiryDateRef} />
            {!formInputsValidity.expiryDate && <p>Please enter an expiry date</p>}
        </div>
        <div className={classes.actions}>
            <button>Save Order</button>
        </div> 
    </form>
  )
}

export default PaymentForm