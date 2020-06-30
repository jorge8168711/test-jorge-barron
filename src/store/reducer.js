import {
  FETCH_EMAILS,
  FETCH_EMAILS_SUCCESS,
  FETCH_EMAILS_FAILED,
  SET_FILTER,
  SET_SEARCH
} from './actions';

const initialState = {
  filterBy: 'inbox',
  search: '',
  inbox: [],
  spam: [],
  deleted: [],
  status: '',
  errir: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAILS:
      return { ...state, status: 'waiting' };

    case FETCH_EMAILS_SUCCESS:
      return { ...state, status: 'received', inbox: action.emails };

    case FETCH_EMAILS_FAILED:
      return { ...state, status: 'failed', error: action.error };

    case SET_FILTER:
      return { ...state, filterBy: action.filter };

    case SET_SEARCH:
      return { ...state, search: action.search };

    default:
      return state;
  }
};

export default reducer;
