import LogoTitle from '../../assets/images/logo-s.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import Cic1 from '../../assets/images/cic1.png';

const Home =() =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'anna Pentikäinen,'.split("");
    const jobArray = 'a web and game developer'.split("")

    

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
                    
        return () => clearTimeout(idTimeOut);
    }, [])

    return(
        <>
            <div className="container home-page">
            <div className='text-zone'>
                <h1 className='desktop'>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>i,</span>    
                <br />
                <span className={`${letterClass} _13`}>I</span>    
                <span className={`${letterClass} _14`}>'m</span>    
                <img src={LogoTitle} alt='H'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={32} />
                </h1>
                <h1 className='mobile'>
                    Hi,
                <br />
                I'm <span className='name-color'>Hanna Pentikäinen</span>,   
                <br />
                a web and game developer
                </h1>
                <h2>Frontend Developer / Game Engine Generalist / XR Specialist / Gamedev Hobbyist </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
                {/* <div className='home-image-container'>
                    <img className='home-image-1' src='https://img.itch.zone/aW1hZ2UvNTQ3MjI3LzQwODMxODkucG5n/original/maYoMT.png' alt='vh'/>
                    <img className='home-image-2' src={Cic1} alt='cic'/>
                    <img className='home-image-3' src='https://img.itch.zone/aW1hZ2UvMjczNjM4LzE0NTExMzcucG5n/original/PHa8PU.png' alt='tgv'/>
                </div> */}
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default Home;