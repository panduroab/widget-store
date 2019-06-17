import { createAction } from "redux-starter-kit";
import { Widget } from "../models";
import { Order } from "../models";


const findWidgetsSucceeded = createAction('FIND_WIDGETS_SUCCEEDED');
const findWidgetsError = createAction('FIND_WIDGETS_ERROR');
const findWidgetsStarted = createAction('FIND_WIDGETS_STARTED');

export const findWidgets = params => async (dispatch) => {
  dispatch(findWidgetsStarted());
  try {
    const widgets = await Widget.find(params);
    return dispatch(findWidgetsSucceeded(widgets.data));
  } catch (e) {
    return dispatch(findWidgetsError(e.message));
  }
};

export const addItemToCart = createAction('ADD_ITEM_TO_CART');
export const removeCartItem = createAction('REMOVE_CART_ITEM');
export const clearCartItems = createAction('CLEAR_CART_ITEMS');