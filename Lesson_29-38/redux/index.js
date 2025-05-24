import redux from 'redux';

const initialState = {
  count: 0,
  cup: 0,
  tomato: 0,
};

// ACTION TYPES
const COUNT_ACTION_INC = 'COUNT_ACTION_INC';
const COUNT_ACTION_DEC = 'COUNT_ACTION_DEC';
const COUNT_ACTION_SET = 'COUNT_ACTION_SET';

// ACTION CREATORS
const inc = () => ({ type: COUNT_ACTION_INC });
const dec = () => ({ type: COUNT_ACTION_DEC });
const set = (payload) => ({ type: COUNT_ACTION_SET, payload });

const store = redux.createStore(reducer, initialState);

function reducer(state, { type, payload }) {
  switch (type) {
    case COUNT_ACTION_INC:
      return { ...state, count: state.count + 1 };
    case COUNT_ACTION_DEC:
      return { ...state, count: state.count - 1 };
    case COUNT_ACTION_SET:
      return { ...state, count: payload };
    default:
      return state;
  }
}

store.dispatch(set(10));
store.dispatch(inc());
store.dispatch(dec());
store.dispatch(dec());

const data = store.getState();
console.log(data);
