import {useEffect} from 'react';
import bbLogo from '../bb-logo.png';
import thunderVideo from '../thunder-background.mp4'
import './Home.css';

export default function Home() {
  useEffect(() => {
    const zoomElement = document.querySelector('.test-page');
    let zoom = 1;
    const ZOOM_SPEED = 1;
  
    return () => {
      document.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
          zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
        } 
        else {
          // ** zoom out: need to set ** //
          // zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;  
        }
      });
    }
  }, [])
    
    return (
      <div className='test-page'>
        <div className='bb-logo-wrapper'>
          <img src={bbLogo} className='bb-logo' alt='big-beard-logo' />
        </div>
        <div className='info-wrapper'>
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
          className='background-video2'
          autoPlay='autoplay'
          loop
          muted
        > 
          <source src={thunderVideo} type='video/mp4'/>
          Your browser does not support this video
        </video>
      </div>
    )

  // return (
  //   <div className='home-page'>
  //    <div className='home-body'>
  //       <div className='logo-container'>
  //         <img src={bbLogo} className='home-logo' alt='logo' />
  //       </div>
  //       <div className='name'>
  //         Daniel Yankiver
  //       </div>
  //       <div className='home-description'>
  //         Creative Software Engineer
  //       </div>
  //       <div className='home-scroll-wrapper'>
  //         <div className='home-scroll-to-enter'>
  //           SCROLL 
  //         </div>
  //         <div className='home-scroll-arrow'>
  //           V
  //         </div>
  //       </div>
  //    </div>
  //    <video 
  //       className='background-video'
  //       autoPlay='autoplay'
  //       loop
  //       muted
  //     > 
  //       <source src={thunderVideo} type='video/mp4'/>
  //       Your browser does not support this video
  //     </video>
  //  </div>
  // )
};

