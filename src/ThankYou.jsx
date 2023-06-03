import React from 'react'
import './ThankYou.css'
import Thanks from './../src/images/illustration-thank-you.svg'

function ThankYou({rating}) {
  return (
    <div className='app_thankyou_container'>
        <div className='app_thankyou_body'>
            <img src={Thanks} alt="" />
            <p>You selected {rating} out of 5</p>
            <h3>Thank you!</h3>
            <span>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</span>

        </div>

    </div>
  )
}

export default ThankYou