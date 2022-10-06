import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import ContactImage from '../../assets/images/contact.svg'
//credit to image: <a href="https://storyset.com/communication">Communication illustrations by Storyset</a>

const Contact = () =>
{
    const refForm = useRef()
    const sendEmail= (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_h3xuey5', 'template_ofhwpap', refForm.current,
                'itmKO1PXqOeAaeWeM'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                },
                ()=>{
                    alert('Failed to send the message, please try again.')
                }
            )
            e.target.reset()
    }
    return(
    <>
        <div className = "container contact-page"> 
            <div className = "text-zone">
                <h1>
                    Contact me
                </h1>
                <p>
                    Thank you for viewing my website.
                    If you have any questions, feel free to contact me using the form below.
                </p>
                <div className = "contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className = "half">
                            <input type = "text" name ="name" placeholder = "Name" required/>
                            </li>

                            <li className = "half">
                            <input type = "text" name ="email" placeholder = "Email" required/>
                            </li>

                            <li>
                            <input type = "text" name ="subject" placeholder = "Subject" required/>
                            </li>

                            <li>
                            <textarea name ="message" placeholder = "Message" required></textarea>
                            </li>

                            <li>
                            <input type = "submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="img">
                    <img className="contact-image" src={ContactImage} alt="contactimage"/>
            </div>
        </div>
        <Loader type = "pacman"/>
    </>   
    )
}
export default Contact