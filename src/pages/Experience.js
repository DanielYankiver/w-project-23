import './Experience.css';

export default function Experiences() {
  return (
    <div style={{ padding: 20 }} className='experience-container'>
      {/* <h2>Experience View</h2>
      <p>resume button that takes you to pdf: can make old school or fun</p> */}
      <div className='languages-container'>
        <div className='languages'>Languages</div>
      </div>
      <div ontouchstart="">
        <div className='resume-button'>
          <a href="#">EJECT RESUME</a>
        </div>
      </div>
      {/* <p>logos of all my languages frameworks </p> */}
    </div>
  );
}