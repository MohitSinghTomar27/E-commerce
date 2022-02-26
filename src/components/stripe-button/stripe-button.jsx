import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51KXWHFSCGBtS9emxe56vGSNlyBlFmlD8NJzZOyDQXbGsPph4dypGiG2JGhG41ebdXanQ6rXsQ9aZHW3EJj7tDt4z00SHZENCGs'


  const onToken = token => {
    console.log(token)
    alert("Payment Successfull")
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Coxcomb Clothing Ltd"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUx.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
      
    </StripeCheckout>
  )
}

export default StripeCheckoutButton