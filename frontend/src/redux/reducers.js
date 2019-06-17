import { createReducer, combineReducers } from "redux-starter-kit";
import { loadState } from "../lib/localStorageHandler";
import uuidv4 from 'uuid/v4';

const initialState = {
  isLoading: false,
  error: null
};

const widgetBrowserReducer = createReducer({
  filterOptions: {
    category: ['Prime', 'Elite', 'Extreme Edition'],
    size: ['Small', 'Medium', 'Big'],
    color: [
      'Red', 'Green', 'Blue', 'White', 'Silver', 'Gray', 'Black', 'Maroon',
      'Yellow', 'Olive', 'Lime', 'Aqua', 'Teal', 'Navy', 'Fuchsia', 'Purple'
    ]
  },
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
    const filtered_cart = state.cartList.filter(item => item.cart_id !== cart_id);
    state.cartList = filtered_cart;
  },
  CLEAR_CART_ITEMS: (state, action) => {
    state.cartList = [];
  }
});

const orderBrowserReducer = createReducer({
  selectedOrder: { items: [] },
  ...initialState
}, {
    /*
    PAY_ORDER_STARTED
    PAY_ORDER_SUCCEEDED
    PAY_ORDER_ERROR
    */
    FETCH_ORDER_STARTED: (state, action) => {
      state.isLoading = true;
    },
    FETCH_ORDER_SUCCEEDED: (state, action) => {
      state.isLoading = false;
      state.selectedOrder = action.payload;
    },
    FETCH_ORDER_ERROR: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    CLEAR_ORDER_BROWSER: (state, action) => {
      state.selectedOrder = { items: [] };
    }
  });

const rootReducer = combineReducers({
  widgetBrowser: widgetBrowserReducer,
  cartBrowser: cartBrowserReducer,
  orderBrowser: orderBrowserReducer
})
export default rootReducer;