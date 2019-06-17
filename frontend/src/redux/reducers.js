import { createReducer, combineReducers } from "redux-starter-kit";
import { loadState } from "../lib/localStorageHandler";
import uuidv4 from 'uuid/v4';

const initialState = {
  isLoading: false,
  error: null
};

const widgetBrowserReducer = createReducer({
  widgetList: [],
  ...initialState
}, {
    FIND_WIDGETS_STARTED: (state, action) => {
      state.isLoading = true;
    },
    FIND_WIDGETS_SUCCEEDED: (state, action) => {
      state.isLoading = false;
      state.widgetList = action.payload;
    },
    FIND_WIDGETS_ERROR: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  });

const persistedState = loadState() || {};
const cartInitState = Object.assign({}, {
  cartList: [],
  ...initialState
}, persistedState.cartBrowser || null);

const cartBrowserReducer = createReducer(cartInitState, {
  ADD_ITEM_TO_CART: (state, action) => {
    state.cartList.push({ cart_id: uuidv4(), ...action.payload });
  },
  REMOVE_CART_ITEM: (state, action) => {
    const { cart_id } = action.payload;
    const filtered_cart = state.cartList.filter(item => item.cart_id != cart_id);
    state.cartList = filtered_cart;
  },
  CLEAR_CART_ITEMS: (state, action) => {
    state.cartList = [];
  }
});

const orderBrowserReducer = createReducer({
  selectedOrder: null,
  ...initialState
}, {
    SELECT_ORDER: (state, action) => {
      state.selectedOrder = action.payload;
    }
  });

const rootReducer = combineReducers({
  widgetBrowser: widgetBrowserReducer,
  cartBrowser: cartBrowserReducer,
  orderBrowser: orderBrowserReducer
})
export default rootReducer;