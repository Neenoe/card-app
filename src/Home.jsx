import React, { useState } from 'react';
import star from './images/icon-star.svg';
import './Home.css';

function Home({ rating, setRating, setShowThankYouPage}) {
  const [isActive, setIsActive] = useState({
    oneStar: true,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  const handleSubmit = () => {
    if (!rating) return;

    setShowThankYouPage(true)
  }

  return (
    <div className='app_card_container'>
      <div className='app_card_body'>
        <div className='app_card_body-img'>
          <img src={star} alt='' />
        </div>

        <div className='app_card_texts'>
          <p>How did we do?</p>
          <span>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.
          </span>
        </div>

        <div className='app_card_list'>
          <div
            className={isActive.oneStar ? 'app_card_lists active' : 'app_card_lists'}
            onClick={() => {
              setIsActive({
                oneStar: true,
                twoStars: false,
                threeStars: false,
                fourStars: false,
                fiveStars: false,
              })
              setRating(1)
              
            }}
          >
            1
          </div>
          <div
            className={isActive.twoStars ? 'app_card_lists active' : 'app_card_lists'}
            onClick={() => {
              setIsActive({
                oneStar: false,
                twoStars: true,
                threeStars: false,
                fourStars: false,
                fiveStars: false,
              })
              setRating(2)
            }}
          >
            2
          </div>
          <div
            className={isActive.threeStars ? 'app_card_lists active' : 'app_card_lists'}
            onClick={() => {
              setIsActive({
                oneStar: false,
                twoStars: false,
                threeStars: true,
                fourStars: false,
                fiveStars: false,
              })
              setRating(3)
            }}
          >
            3
          </div>
          <div
            className={isActive.fourStars ? 'app_card_lists active' : 'app_card_lists'}
            onClick={() => {
              setIsActive({
                oneStar: false,
                twoStars: false,
                threeStars: false,
                fourStars: true,
                fiveStars: false,
              })
              setRating(4)
            }}
          >
            4
          </div>
          <div
            className={isActive.fiveStars ? 'app_card_lists active' : 'app_card_lists'}
            onClick={() => {
              setIsActive({
                oneStar: false,
                twoStars: false,
                threeStars: false,
                fourStars: false,
                fiveStars: true,
              })
              setRating(5)
            }}
          >
            5
          </div>
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
}

export default Home;
