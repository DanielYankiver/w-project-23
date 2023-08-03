import bbLogo from '../bb-logo.png';
import './Home.css';
// import thunderVideo from '../thunder-background.mp4'

export default function Home() {
  return (
    <div className='home-page'>
      {/* <video autoPlay='autoplay' loop='loop' muted className='background-video'>
        <source src={thunderVideo} type='video/mp4'/>
        Your browser does not support this video
      </video> */}
     <div className='home-body'>
       <img src={bbLogo} className='home-logo' alt='logo' />
       <div className='name'>
         Daniel Yankiver
       </div>
       <div className='home-description'>
         Creative Software Engineer
       </div>
       <div className='home-scroll-to-enter'>
         SCROLL TO ENTER
       </div>
     </div>
   </div>
  )
};

