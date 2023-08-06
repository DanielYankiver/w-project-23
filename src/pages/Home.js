import bbLogo from '../bb-logo.png';
import './Home.css';
import thunderVideo from '../thunder-background.mp4'

export default function Home() {
  return (
    <div className='home-page'>
     <div className='home-body'>
       <img src={bbLogo} className='home-logo' alt='logo' />
       <div className='name'>
         Daniel Yankiver
       </div>
       <div className='home-description'>
         Creative Software Engineer
       </div>
       <div className='home-scroll-wrapper'>
        <div className='home-scroll-to-enter'>
          SCROLL 
        </div>
        <div className='home-scroll-arrow'>
          V
        </div>
       </div>
     </div>
     <video 
        className='background-video'
        autoPlay='autoplay'
        loop
        muted
      > 
        <source src={thunderVideo} type='video/mp4'/>
        Your browser does not support this video
      </video>
   </div>
  )
};

