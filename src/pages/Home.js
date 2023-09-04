import {useEffect} from 'react';
import bbLogo from '../bb-logo.png';
import thunderVideo from '../thunder-background.mp4'
import {TypeAnimation} from 'react-type-animation';
import './Home.css';

export default function Home() {    
  return (
    <div className='home-page'>
     <div className='home-body'>
        <div className='logo-container'>
          <img src={bbLogo} className='home-logo' alt='logo' />
        </div>
        <div className='name'>
          Daniel Yankiver
        </div>
        <TypeAnimation
          className='home-description'
          sequence={[
            'Creative Software Engineer',
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            'Creative Frontend Developer',
            2000,
            'Creative Web Developer',
            2000,
            'Creative Filmmaker',
            2000
          ]}
          wrapper="div"
          speed={10}
          style={{fontSize: '26px', marginLeft: '12px'}}
          repeat={Infinity}
          // omitDeletionAnimation={true}
        />
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

// Scroll effect 
  // useEffect(() => {
//   const zoomElement = document.querySelector('.test-page');
//   let zoom = 1;
//   const ZOOM_SPEED = 1;

  

  

//   return () => {
//     document.addEventListener('wheel', function (e) {
//       if (e.deltaY > 0) {
//         zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//         // console.log(zoomElement.style.cssText)
//         // console.log(e)
//       } 
//       // else if (e.deltaY > 17.8302001953125) {
        
//       // }
//       else {
//         // ** zoom out: need to set ** //
//         // zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;  
//       }
//     });
//     // window.addEventListener()
//   }
// }, [])

 // return (
  //   <div className='test-page'>
  //     <div className='bb-logo-wrapper'>
  //       <img src={bbLogo} id='bb-logo' className='bb-logo' alt='big-beard-logo' />
  //     </div>
  //     <div className='info-wrapper'>
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
  //     </div>
  //     <video 
  //       className='background-video2'
  //       autoPlay='autoplay'
  //       loop
  //       muted
  //     > 
  //       <source src={thunderVideo} type='video/mp4'/>
  //       Your browser does not support this video
  //     </video>
  //   </div>
  // )

