
import React from 'react'
import Stripe from 'stripe'
import {StripeProvider} from 'react-stripe-elements'
// import MyStoreCheckout from './MyStoreCheckout'
import CardSection from './CardSection'

const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

const Checkout = () => {
    return (
        // <CardSection />
        
        <StripeProvider apiKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx'>
            {/* <MyStoreCheckout /> */}
            <CardSection />
        </StripeProvider>
    )
}

export default Checkout
