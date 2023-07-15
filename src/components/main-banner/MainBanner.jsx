import React from 'react'
import interactivemovile from '../../assets/mobile/image-interactive.jpg'
import interactiveDesktop from '../../assets/desktop/image-interactive.jpg'

import './mainBanner.scss'


const MainBanner = () => {
  return (
    <div className='MBanner'>
      <img className='MBanner__mobile' src={interactivemovile} alt="img-interactive-banner-movile" />
      <img className='MBanner__desktop' src={interactiveDesktop} alt="img-interactive-banner-desktop" />
      <div className='MBanner__text'>
        <h2 className='MBanner__text__title'>THE LEADER IN INTERACTIVE VR</h2>
        <span className='MBanner__text__span'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</span>
      </div>
    </div>
  )
}
export default MainBanner