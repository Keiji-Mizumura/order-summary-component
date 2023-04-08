import React from 'react'

const OrderSummary = () => {
  return (
    <div className="order-summary">
        <div className="order-summary-image">
            <img src="/images/illustration-hero.svg" alt="hero"/>
        </div>
        <div className="order-summary-header">
            <h1>Order Summary</h1>
            <p>
                You can now listen to million of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
        </div>
        <div className="order-summary-form">
            <div className="order-summary-plan">
                <div className='order-summary-form-icon'>
                    <img src="/images/icon-music.svg" alt="music" />
                </div>
                <div className='order-summary-form-content'>
                    <h3>Annual Plan</h3>
                    <p>$59.99/year</p>
                </div>
                <div className='order-summary-form-controls'>
                    <a href="#">Change</a>
                </div>
            </div>
            <div className="order-summary-buttons">
                <button className='btn btn-blue'>
                    Proceed to Payment
                </button>
                <button className='btn btn-white'>
                    Cancel Order
                </button>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary