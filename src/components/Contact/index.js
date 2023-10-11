import './index.scss';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    const str_h1 = 'Contact me'.split("");

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
                    
        return () => clearTimeout(idTimeOut);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_pa9yjnl', 
            'template_vldprxk', 
            refForm.current, 
            'Lv_e_zZQOQhWfrReZ'
            ).then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    const position = [60.2055, 24.6559]

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={str_h1}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in full- and part-time opportunities in relevant companies and organizations.
                    Do not hesitate to contact me using the contact form below.
                </p>
                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input 
                            type='text' 
                            name='from_name' 
                            placeholder='Name' 
                            required>
                            </input>
                        </li>
                        <li className='half'>
                            <input 
                            type='email' 
                            name='email' 
                            placeholder='Email' 
                            required>
                            </input>
                        </li>
                        <li>
                            <input 
                            type='text' 
                            name='subject' 
                            placeholder='Subject' 
                            required>
                            </input>
                        </li>
                        <li>
                            <textarea 
                            name='message' 
                            placeholder='Message' 
                            required>
                            </textarea>
                        </li>
                        <li>
                            <input 
                            className='flat-button'
                            type='Submit' 
                            name='submit' 
                            value='SEND'
                            required>
                            </input>
                        </li>
                    </ul>
                </form>
                </div>
            </div>
            <div className='info-map'>
                Hanna Pentikäinen,
                <br />
                Espoo, Finland,
                <br />
                +358 400 656 720

                <br />
                <span>hannamariap@hotmail.com</span>
            </div>
            <div className='map-wrap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38819.806241165235!2d24.657067893265044!3d60.21161473147347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df2faa43d4be1%3A0xf0b890b45d33539f!2sEspoo!5e0!3m2!1sen!2sfi!4v1695991876098!5m2!1sen!2sfi" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <Loader type='ball-scale-ripple-multiple'/>
        </>

    )
}

export default Contact;