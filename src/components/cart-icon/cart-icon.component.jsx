import React from 'react'
import {connect} from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {toggleCartHidden, TOGGLE_CART_HIDDEN} from '../../redux/cart/cart.actions'
import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
// })

// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// })


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)