import bbLogo from '../bb-logo.png';
import './Home.css';

export default function Home() {
  return (
    <div className='home-page'>
     {/* <Router>All routes are nested inside it</Router> */}
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

