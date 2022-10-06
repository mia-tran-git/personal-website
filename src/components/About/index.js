import './index.scss';
import Loader from 'react-loaders';
import PdfFile from '../../assets/file/MyTran_Resume.pdf'
import  AboutImage from '../../assets/images/about1.svg'

//credit to image: <a href="https://storyset.com/work">Work illustrations by Storyset</a>
const About =() => 
{
    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        About Me
                    </h1>
                    
                    <p>
                        Hello! I am Thao My from Dallas, Texas. 
                        I'm an innovative and dedicated web developer.
                        My dedication to continuously learning about new web design trends and concepts.
                       <br></br>
                        My personal interest includes front end, back end, and UI design. 
                        I'm looking for a software development internship role
                        where I can take on new responsibilities, challenges, and gain experiences with web development.
                        
                    </p>
                </div>
    
                 <div className="resume">
                    <a href ={PdfFile} className='flat-button' 
                    onclick="window.open('ThaoMyNgocTran_Resume.pdf','_blank', 'fullscreen=yes');
                    return false;">My Resume</a>
                 </div>   
                <div className= "image">
                <img className="about-image" src={AboutImage} alt="aboutimage"/>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    ) 
} 

export default About