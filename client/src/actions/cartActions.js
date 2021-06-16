export const addToCart = (clothe, quantity, varient)=>async (dispatch, getState)=>{

 var cartItem = {
  name : clothe.name,
  _id : clothe._id,
  image : clothe.image,
  varient : varient,
  quantity : quantity,
  prices : clothe.prices,
  price : clothe.prices[0][varient]*quantity
 }

 dispatch({type:'ADD_TO_CART' , payload : cartItem})

 const cartItems = getState().cartReducer.cartItems

 localStorage.setItem('cartItems', JSON.stringify(cartItems))
}