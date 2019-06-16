import { createReducer, combineReducers } from "redux-starter-kit";

const initialState = {
  isLoading: false,
  error: null
};

const browserWidgetsReducer = createReducer({
  widgetList: [],
  widgets: [],
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

const browserCartReducer = createReducer({
  itemList: [],
  ...initialState
}, {
    ADD_ITEM: (state, action) => {
      state.itemList.push(action.payload);
    }
  });

const broserOrdersReducer = createReducer({
  selectedOrder: null,
  ...initialState
}, {
    SELECT_ORDER: (state, action) => {
      state.selectedOrder = action.payload;
    }
  });

const rootReducer = combineReducers({
  browserWidgets: browserWidgetsReducer,
  browserCart: browserCartReducer,
  broserOrders: broserOrdersReducer
})
export default rootReducer;