import { createAction } from "redux-starter-kit";
import { Widget } from "../models";
import { Order } from "../models";
import { store } from '../App';

const findWidgetsStarted = createAction('FIND_WIDGETS_STARTED');
const findWidgetsSucceeded = createAction('FIND_WIDGETS_SUCCEEDED');
const findWidgetsError = createAction('FIND_WIDGETS_ERROR');

export const findWidgets = params => async (dispatch) => {
  dispatch(findWidgetsStarted());
  try {
    const widgets = await Widget.find(params);
    return dispatch(findWidgetsSucceeded(widgets.data));
  } catch (e) {
    return dispatch(findWidgetsError(e.message));
  }
};
export const decreaseWidgetStock = createAction('DECREASE_WIDGET_STOCK');
export const addItemToCart = createAction('ADD_ITEM_TO_CART');
export const removeCartItem = createAction('REMOVE_CART_ITEM');
export const clearCartItems = createAction('CLEAR_CART_ITEMS');

export const checkoutOrder = createAction('CHECKOUT_ORDER');
export const cancelOrder = createAction('CANCEL_ORDER');
export const closeOrderDetails = createAction('CLOSE_ORDER_DETAILS');
const payOrderStarted = createAction('PAY_ORDER_STARTED');
const payOrderSucceeded = createAction('PAY_ORDER_SUCCEEDED');
const payOrderError = createAction('PAY_ORDER_ERROR');
export const payOrder = () => async (dispatch) => {
  //Get cartList from state
  const { cartBrowser: { cartList } } = store.getState();
  const order = { items: cartList };
  dispatch(payOrderStarted());
  try {
    const res = await Order.create(order);
    dispatch(clearCartItems());
    return dispatch(payOrderSucceeded(res.data));
  } catch (e) {
    return dispatch(payOrderError(e.message));
  }
};

const fetchOrderStarted = createAction('FETCH_ORDER_STARTED');
const fetchOrderSucceeded = createAction('FETCH_ORDER_SUCCEEDED');
const fetchOrderError = createAction('FETCH_ORDER_ERROR');
export const clearOrderBrowser = createAction('CLEAR_ORDER_BROWSER');
export const fetchOrderById = orderId => async (dispatch) => {
  dispatch(clearOrderBrowser());
  dispatch(fetchOrderStarted());
  try {
    const order = await Order.findById(orderId);
    return dispatch(fetchOrderSucceeded(order.data));
  } catch (e) {
    return dispatch(fetchOrderError(e.message));
  }
};