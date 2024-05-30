import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import contact_icon from '../../assets/contact.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9f2e8bb8-9bc9-4d3d-a56c-a073413f7ffc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className={'contact'}>
            <img src={contact_icon} alt=""/>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt=""/></h3>
                <ul>
                    <li><img src={mail_icon} alt=""/>Lzy500429@gmail.com</li>
                    <li><img src={phone_icon} alt=""/>13728332248</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name={'name'} placeholder={'Enter your name'} required/>
                    <label>Write your messages here</label>
                    <textarea name="message"  rows="8" placeholder={'Enter your message'} required></textarea>
                    <button type='submit' className={'sub'} >Submit now <img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};
export default Contact;