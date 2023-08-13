import {useEffect} from 'react';
import bbLogo from '../bb-logo.png';
import thunderVideo from '../thunder-background.mp4'
import './ZoomTest.css';

export default function ZoomTest() {


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
}