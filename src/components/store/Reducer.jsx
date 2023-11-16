import listProducts from "./productData.js";
export const initialState = {
  basket: [],
  user: null,
  shippingData: {},
  paymentMessage: "",
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  CLEAR_BASKET: "CLEAR_BASKET",
  SET_USER: "SET_USER",
  SET_SHIPPING_DATA: "SET_SHIPPING_DATA",
  SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
};

export const getTotalPrice = (basket) => {
  let total = 0;
  basket?.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET: {
      let newItem = listProducts.find(
        (product) => product.id === action.item.id
      );
      let itemInBasket = state.basket.find(
        (basketItem) => basketItem.id === newItem.id
      );
      return itemInBasket
        ? {
            ...state,
            basket: state.basket.map((basketItem) =>
              basketItem.id === newItem.id
                ? { ...basketItem, quantity: basketItem.quantity + 1 }
                : basketItem
            ),
          }
        : {
            ...state,
            basket: [...state.basket, { ...newItem }],
          };
    }
    case actionTypes.REMOVE_FROM_BASKET: {
      let itemToDelete = state.basket.find(
        (product) => product.id === action.id
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            basket: state.basket.map((basketItem) =>
              basketItem.id === action.id
                ? { ...basketItem, quantity: basketItem.quantity - 1 }
                : basketItem
            ),
          }
        : {
            ...state,
            basket: state.basket.filter(
              (basketItem) => basketItem.id !== action.id
            ),
          };
    }
    case actionTypes.CLEAR_BASKET:
      return {
        ...state,
        basket: [],
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_SHIPPING_DATA:
      return {
        ...state,
        shippingData: action.shippingData,
      };
    case actionTypes.SET_PAYMENT_MESSAGE:
      return {
        ...state,
        paymentMessage: action.paymentMessage,
      };

    default:
      return state;
  }
}

export default reducer;
