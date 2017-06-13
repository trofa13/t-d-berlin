// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const FORM_ADD_ITEM = 'FORM_ADD_ITEM';
export const RESET_STATE = 'RESET_STATE';

// ------------------------------------
// Actions
// ------------------------------------
export function increment (itemId = '', value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : {
      itemId,
      value
    }
  };
}

export function addItem (value = '') {
  return {
    type    : FORM_ADD_ITEM,
    payload : value
  };
}

export function resetState () {
  return {
    type: RESET_STATE
  };
}

export const actions = {
  increment,
  addItem,
  resetState
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => {
    const items = state.items.map(item => {
      if (item.id === action.payload.itemId) {
        item.count += action.payload.value;
      }
      return item;
    });

    return { ...state, items };
  },

  [FORM_ADD_ITEM]: (state, action) => {
    return { ...state, items: state.items.concat(action.payload) };
  },

  [RESET_STATE]: () => {
    return { items: [] };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { items: [] };

export default function textItemsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
