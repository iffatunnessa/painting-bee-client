import React, { useContext, useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import './CheckoutForm.css';
import { useParams } from "react-router";
import { UserContext } from "../../../App";
const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: "20px",
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const CheckoutForm = ({ service }) => {
    const { _id, imageURL, description, serviceTitle } = service;
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [paymentError, setPaymentError] = useState(null);
    const [payment, setPayment] = useState(null);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState("");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userEmail = loggedInUser.email;
    console.log(userEmail);
    const handleSubmit = async event => {
        event.preventDefault();
        const eventData = {
            userEmail: userEmail,
            userName: userName,
            email: email,
            address: address,
            phone: phone,
            details: details,
            paymentId: payment,
            serviceId: _id,
            serviceTitle: serviceTitle,
            serviceDescription: description,
            imageURL: imageURL,
            status: 'Pending',
        }
        if (!stripe || !elements) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (error) {
            setPaymentError(error.message);
            setPayment('');
        } else {
            setPayment(paymentMethod.id);
            setPaymentError('');
        }

        const url = 'https://tranquil-bayou-21139.herokuapp.com/book';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("added item(client)", res));
    };

    return (
        <form onSubmit={handleSubmit} className="row g-4">
            {paymentError && <div className="alert alert-danger" role="alert">
                {paymentError}
            </div>
            }
            {payment && <div className="alert alert-success" role="alert">
                Your payment is successful!
             </div>
            }

            <div className="col-md-8 form-group" >
                <input name="userName" type="text" className="form-control" id="userName" placeholder="Enter Your Name" required onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="col-md-8 form-group">
                <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="col-md-8 form-group">
                <input type="text-area" name="details" className="form-control" id="details" placeholder="What do you want to paint?" onChange={(e) => setDetails(e.target.value)} required />
            </div>
            <div className="col-md-8 form-group">
                <input type="text-area" name="address" className="form-control" id="address" placeholder="Full Address" onChange={(e) =>  setAddress(e.target.value)} required />
            </div>
            <div className="col-md-8 form-group">
                <input type="text-area" name="phone" className="form-control" id="phone" placeholder="+880 11111111" onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <label >
                Card number
          <CardNumberElement className="col-md-8 form-group"
                    options={options}
                />
            </label>
            <label >
                Expiration date
          <CardExpiryElement className="col-md-8 form-group"
                    options={options}
                />
            </label>
            <label>
                CVC
          <CardCvcElement className="col-md-8 form-group"
                    options={options}
                />
            </label>
            <p style={{ fontSize: "14px", fontWeight: "bold"}}>We are charging $100 dollars as an advance payment.</p>
            <button className='btn btn-primary btn-pay' type="submit" disabled={!stripe}>
                Pay
        </button>

        </form>
    );
};

export default CheckoutForm;
