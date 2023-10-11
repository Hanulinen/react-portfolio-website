import './index.scss'
import Cic1 from '../../assets/images/cic1.png';
import Cic2 from '../../assets/images/cic2.png';
import Cic3 from '../../assets/images/cic3.png';
import Tank1 from '../../assets/images/tank1.png';
import Tank2 from '../../assets/images/tank2.png';
import GoW from '../../assets/images/gow.png';
import Antarctica from '../../assets/images/antarctica.png';
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { faItchIo, faSteam } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
                    
        return () => clearTimeout(idTimeOut);
    }, [])

    const str_h1 = 'Portfolio'.split("");

    return(
        <>
            <div className= "portfolio-container">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={str_h1}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Here you can take a look at what I've been doing over the years. Hover or tap a picture for more info.
                    </p>
                </div>
                <div className='inner-container'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','2','4','-','2','0','2','5']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                        <div class="single-image">
                            <img src={Cic1} alt='cic1'/>
                            <div class="image-overlay">
                                <p>
                                    These are screenshots from "Crystal in Carnations", a game I've been working on for the last year with my game development group. It will release sometime in the year 2024 or 2025.
                                </p>
		                    </div>
                        </div>
                        <div class="single-image">
                            <img src={Cic2} alt='cic2'/>
                            <div class="image-overlay">
                                <p>
                                    The game is a turn-based strategy game powered by SRPG studio, a javascript based lightweight game engine.
                                </p>
		                    </div>
                        </div>
                        <div class="single-image">
                            <img src={Cic3} alt='cic3'/>
                            <div class="image-overlay">
                                <p>
                                    The release is still far away and I don't expect to make very much money from it (if at all), but it has been a blast to develop it over the last year.
                                </p>
		                    </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','2','3','-']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                        <div class="single-image">
                            <img src='https://img.itch.zone/aW1nLzg1MTUwNzIucG5n/original/yU0xTa.png' alt='salmon snake'/>
                            <div class="image-overlay">
                                <p>
                                    I take a year off from the work force to focus on my own creative projects. My friends and I dub our hobbyist game dev group "Salmon Snake Games."
                                </p>
		                    </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','2','1','-','2','0','2','3']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                    <img src='https://logos-world.net/wp-content/uploads/2020/07/Accenture-Symbol.png' alt='accenture'/>
                            <div class="image-overlay">
                                <p>
                                    I get a job from Accenture Finland's Liquid Studio that focuses on XR development and innovation.
                                </p>
		                    </div>
                        </div>
                        <div class="single-image">
                        <img src='https://pbs.twimg.com/profile_images/1075012520837029889/jSALzNPb_400x400.jpg' alt='puolustusvoimat'/>
                            <div class="image-overlay">
                                <p>
                                    My main project is under NDA, so I cannot divulge any information on it.
                                </p>
		                    </div>
                        </div>  
                        <div class="single-image">    
                        <img src='https://kurppahosk.com/wp-content/uploads/2019/07/kurppa_hosk-intrum_featured_image.jpg' alt='intrum'/>
                            <div class="image-overlay">
                                <p>
                                    In my second year I'm tasked to work as a part of a large team in integration of our client Intrum's system structure to unify their systems between different countries.  
                                </p>
		                    </div>
                        </div>
                        <div class="single-image">    
                        <img src='https://bairesdev.mo.cloudinary.net/blog/2022/08/ue-logo-1400x788-1400x788-8f185e1e3635-1.jpg?tx=w_3840,q_auto' alt='unreal'/>
                            <div class="image-overlay">
                                <p>
                                    At Accenture I also gained some Unreal Engine experience and C++ experience in various projects.  
                                </p>
		                    </div>
                        </div>               
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','2','0']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvNTQ3MjI3LzQwODMxODkucG5n/original/maYoMT.png' alt='vengeful heart 1'/>
                            <div class="image-overlay">
                                <p>
                                    The first COVID year isn't all doom and gloom for me, for I manage to finish and release my long time visual novel project, "Vengeful Heart" on Steam. You can find the store page from behind the link.
                                </p>

                                <NavLink exact="true" activeclassname="active" className="steam-link-vh" to="https://store.steampowered.com/app/1101310/Vengeful_Heart/">
                                    <FontAwesomeIcon icon={faSteam} color="#E77563" />
                                </NavLink>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvNTQ3MjI3LzQwODMxODEucG5n/original/%2BbjP9E.png' alt='vengeful heart 2'/>
                            <div class="image-overlay">
                                <p>
                                    The story is a revenge plot against a large company that decides to privatize all water in the fictional cyberpunk city the game is based in. Like the previous game, this one was also made using Ren'py.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvNTQ3MjI3LzQwODMxODYucG5n/original/xpSTbY.png' alt='vengeful heart 3'/>
                            <div class="image-overlay">
                                <p>
                                    The game was a moderate success and it eventually enabled me to take a year off from work. It was released not only in steam but all the current consoles as well at the behest of Top Hat Studios.
                                </p>
		                    </div>
                        </div>         
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','1','9','-','2','0','2','1']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                        <img src='https://teatimeresearch.com/wp-content/uploads/2020/01/LOGO-2020-VALMIS_Logo_text_white.png' alt='teatime research'/>
                            <div class="image-overlay">
                                <p>
                                    I land my first full-time job in Teatime Research, a startup specializing in VR and AR technologies. I work here for 2 years until COVID forces the company to lay everyone off.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://popjazz.fi/wp-content/uploads/PIENI-PopJazzKonservatorio_logo_RGB_kulta.jpg' alt='pop jazz'/>
                            <div class="image-overlay">
                                <p>
                                    My main project at Teatime was to make a music theory learning app for Pop & Jazz Conservatory using Unity.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://forum-marinum.finna.fi/themes/custom/images/finna-logo.png?_=1618841983' alt='forum marinum'/>
                            <div class="image-overlay">
                                <p>
                                    Occasionally I also took part in other projects, mostly VR in nature. One of them was a virtual museum commissioned my Forum Marinum.
                                </p>
		                    </div>
                        </div>         
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','1','9']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                        <img src={GoW} alt='gow'/>
                            <div class="image-overlay">
                                <p>
                                    I graduate from Metropolia and officially become an engineer. While studying I took part in numerous projects both mandatory and optional. In this project I did the background art.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvMTcwMzI1LzI4NzIyMTMuanBn/original/gf7Rro.jpg' alt='mbl'/>
                            <div class="image-overlay">
                                <p>
                                    This project was a dating-sim made using Unity and my role was in programming. We finished the game and released in Steam, but we have since taken it down, because it no longer lives up to our standards.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvMTEwMjc2LzUxMjMyMy5wbmc=/original/9U6aRQ.png' alt='fantasy quest'/>
                            <div class="image-overlay">
                                <p>
                                    This game was made for class and I did everything for it save for the music. You can download it from behind the link.
                                </p>
                                <NavLink exact="true" activeclassname="active" className="steam-link-vh" to="https://salmon-snake.itch.io/fantasy-quest">
                                    <FontAwesomeIcon icon={faItchIo} color="#E77563" />
                                </NavLink>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src={Antarctica} alt='antarctica'/>
                            <div class="image-overlay">
                                <p>
                                    This project was a multiplayer game project made using Unity. My role was 3D-modeling and I made models for the game by using Blender.
                                </p>
		                    </div>
                        </div>         
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','1','8']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvMjczNjM4LzE0NTExMzQucG5n/original/RWTQfg.png' alt='the great voyage 1'/>
                            <div class="image-overlay">
                                <p>
                                    "The Great Voyage" or the first commercial game/visual novel I ever released. It didn't make much money, but I'm eternally fond of it creatively.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvMjczNjM4LzE0NTExMzUucG5n/original/ChWpdm.png' alt='the great voyage 2'/>
                            <div class="image-overlay">
                                <p>
                                    The game is about three individuals who flee from their home country after it is invaded by an enemy nation and focuses on the long voyage they have to endure to reach safety.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src='https://img.itch.zone/aW1hZ2UvMjczNjM4LzE0NTExMzcucG5n/original/PHa8PU.png' alt='the great voyage 3'/>
                            <div class="image-overlay">
                                <p>
                                    It was made in python based visual novel engine, Ren'py. You can find the Steam store page from behind the link.
                                </p>
                                <NavLink exact="true" activeclassname="active" className="steam-link-vh" to="https://store.steampowered.com/app/932820/The_Great_Voyage__Visual_Novel/">
                                    <FontAwesomeIcon icon={faSteam} color="#E77563" />
                                </NavLink>
		                    </div>
                        </div>         
                    </div>
                    <div className='image-container'>
                    <div class="single-image">
                    <img src='https://gamesjobs.fi/wp-content/uploads/2022/05/airdice_logo_white.png' alt='Air Dice'/>
                            <div class="image-overlay">
                                <p>
                                    I take an internship at Air Dice where I'm tasked with converting some of their old, flash-based games to work with their new adobe/javascript pipeline."
                                </p>
		                    </div>
                        </div>         
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','1','7']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                    <img src='https://images.almatalent.fi/cx86,cy0,cw2828,ch2121,1200x/https://assets.almatalent.fi/image/1d90942c-e6bf-5a48-afb9-c5c62e35c61c' alt='wargaming helsinki'/>
                            <div class="image-overlay">
                                <p>
                                    I land an internship in Wargaming Helsinki where I'm tasked with creating prototypes for possible future games using C# and Unity.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src={Tank1} alt='wargaming prototype 1'/>
                            <div class="image-overlay">
                                <p>
                                    These are images from the prototypes I made. The studio is long since defunct, but I asked permission to use pictures from back in the day.
                                </p>
		                    </div>
                        </div>         
                        <div class="single-image">
                        <img src={Tank2} alt='wargaming prototype 2'/>
                            <div class="image-overlay">
                                <p>
                                    Another screenshot of another prototype. All prototypes had to be tank themed.
                                </p>
		                    </div>
                        </div>             
                    </div>
                </div>
                <div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['2','0','1','5']}
                        idx={15}
                        />
                    </h1>
                    <div className='image-container'>
                    <div class="single-image">
                        <img src='https://www.metropolia.fi/sites/default/files/styles/16_9_fullwith_extra_large/public/images/Graafinen%20ohjeistus/logo%20block.jpg?h=d1cb525d' alt='metropolia'/>
                            <div class="image-overlay">
                                <p>
                                    I enroll in Metropolia UAS with the aim to become a software engineer.
                                </p>
		                    </div>
                        </div>         
                    </div>
                </div>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default Portfolio