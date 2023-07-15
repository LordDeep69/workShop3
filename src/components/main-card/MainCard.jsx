import React from 'react'
import './mainCard.scss'
const MainCard = ({ima, nam}) => {

  return (
    <article className='card'>

    <div className='card-image' style={{ backgroundImage: `url(${ima}` }}>
        <h3 className='card-title' dangerouslySetInnerHTML={{ __html: nam }}></h3>
    </div>


    </article>
  )
}

export default MainCard;