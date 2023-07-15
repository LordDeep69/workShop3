import React, { useState, useEffect } from 'react';
import './mainCards.scss';
import MainCard from '../main-card/MainCard.jsx';
import desktoppCards from '../../assets/data/desktopCards';
import mobilepCards from '../../assets/data/mobileCards';
import useScreenSize from '../../hooks/useScreenSize.js';

const MainCards = () => {
  const desktop = desktoppCards;
  const mobile = mobilepCards;
  
  const responsive = useScreenSize();
  const [listImg, setListImg] = useState(responsive.width >= 1000 ? desktop : mobile);
  const [previousWidth, setPreviousWidth] = useState(responsive.width);

  useEffect(() => {
    if (previousWidth < 1000 && responsive.width >= 1000) {
      console.log('Al toque, mi rey, finos, esta es. 👌');
      setListImg(desktop);
    } else if (previousWidth >= 1000 && responsive.width < 1000) {
      console.log('Pantalla Chica, mi papá, como la que tienes. Je, je. ;). 😂');
      setListImg(mobile);
    }
    setPreviousWidth(responsive.width);
  }, [responsive.width, previousWidth, desktop, mobile]);

  return (
    <section className='sectionMainCard'>
      <div className='divMain'>
            <h2 className='h2Main'>OUR CREATIONS</h2>

            {responsive.width >= 1000 && (
        
              <span className='spanMain'>SEE ALL</span>
            )}
            
      </div>


      <section className='card__container'>

        {
          listImg.map((card, key) => (

            <MainCard  key={key} ima = {card.image} nam = {card.name} />
          ))



        }

      </section>

      
      {responsive.width < 1000 && (
        
        <span className='spanMain'>SEE ALL</span>
      )}
    </section>
  );
};

export default MainCards;
