import LogoTitle from '../../assets/images/mylogo7.png';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import { useState} from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import FrontImage from '../../assets/images/cover1.svg'

//credit to photo: <a href="https://storyset.com/online">Online illustrations by Storyset</a>


const Home = () =>{
    const [letterClass] = useState('text-animate')
    const nameArray = ['y']
   const jobArray = ['w', 'e', 'b',' ', 'd','e','v', 'e','l', 'o', 'p', 'e', 'r']
   

    return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={ LogoTitle } alt="M"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={13} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Developer/Student</h2>
                <Link to="/contact" className ='flat-button'>CONTACT ME</Link>
            </div>
        
            <div className="side-image">        
                    <img className="front-image" src={FrontImage} alt="frontcover"/>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );
}
export default Home