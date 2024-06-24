import { createStore } from "redux";
function cartReducer(state= { items: {}}, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = acttion.payload;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        }
      }
    }
    case "REMOVE_FROM_CART": {
      if(state.items[product.id].quantity <= 1) {
        // const items = {...state.items};
        // delete items[product.id];
        // return {
        //   ...state,
        //   items
  
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        }
      
      }
    }
    default:
      return state;
  }
}


const store = createStore(cartReducer);

export default store;


// action is an object 

// type
// payload
