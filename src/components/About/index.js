import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faGit, faGitAlt, faHtml5, faJsSquare, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const str_h1 = 'About me'.split("");

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
                    
        return () => clearTimeout(idTimeOut);
    }, [])

    return(
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={str_h1}
                    idx={15}
                    />
                </h1>
                <p>
                    For my whole life I have been a big fan of logic/puzzles/maths but also of arts and crafts. My desire to combine these passions led me to discover and fall in love with the art of programming. 
                    I especially enjoy the kind of coding that lets me visually see the work of my hands in real time, which is why front-end/game programming is near and dear to my heart.
                </p>
                <p>
                    My skillset includes buzzwords such as Unity, Unreal, Ren'py, SRPG studio, VBS4, HTML, CSS, Github, Jenkins, C#, Javascript, C++, Java, Python, Photoshop and Live-2D.
                    While it is true that most of my work experience has been spent with game engines, I am quick to learn and will surely incorporate your stack to my workflow in no time at all!
                </p>
                <p>
                    Unrelated to programming, my other skills include things like digital art, live-2d modeling, crocheting, puzzle solving, cake baking and more. 
                    In my free time I play the MMO FFXIV and hang around with my two cats. (Cat tax provided upon request.) 
                    If I sound like a person you want to work with or you just want to see my two cats, don't hesitate to contact me using the contact form on this website.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGamepad} color='#E77563' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#E77563' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#E77563' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faUnity} color='#E77563' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#E77563' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#E77563' />
                    </div>
                </div>
            </div>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>

    )
};

export default About;