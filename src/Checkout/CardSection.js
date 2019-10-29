import React from 'react'
import {CardElement} from 'react-stripe-elements'

const CardSection = () => {
    return (
        <label>
            Card Details
            <CardElement style={{base: {fontSize: '18px'}}} />
        </label>
    )
}

export default CardSection
