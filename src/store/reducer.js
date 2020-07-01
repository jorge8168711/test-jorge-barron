import {
  FETCH_EMAILS,
  FETCH_EMAILS_SUCCESS,
  FETCH_EMAILS_FAILED,
  SET_FILTER,
  SET_SEARCH,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  MOVE_TO_SPAM,
  DELETE_EMAIL,
  ADD_EMAILS,
  SET_SELECTION,
  CLEAN_SELECTION
} from './actions';

const initialState = {
  filterBy: 'inbox',
  currentSelection: null,
  search: '',
  inbox: [],
  spam: [],
  deleted: [],
  status: '',
  error: null
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

    case MARK_AS_READ: {
      const itemIndex = state[state.filterBy].findIndex((item) => item.id === action.itemId);
      const updatedItems = [...state[state.filterBy]];
      updatedItems[itemIndex].isReaded = true;
      return { ...state, [state.filterBy]: updatedItems };
    }

    case MARK_AS_UNREAD: {
      const itemIndex = state[state.filterBy].findIndex((item) => item.id === action.itemId);
      const updatedItems = [...state[state.filterBy]];
      updatedItems[itemIndex].isReaded = false;
      return { ...state, [state.filterBy]: updatedItems };
    }

    case MOVE_TO_SPAM: {
      const deletedEmail = state[state.filterBy].find((el) => el.id === action.itemId);
      const updatedItems = state[state.filterBy].filter((item) => item.id !== action.itemId);

      return {
        ...state,
        [state.filterBy]: updatedItems,
        spam: deletedEmail ? [...state.spam, deletedEmail] : [...state.spam]
      };
    }

    case DELETE_EMAIL: {
      const deletedEmail = state[state.filterBy].find((el) => el.id === action.itemId);
      const updatedItems = state[state.filterBy].filter((item) => item.id !== action.itemId);

      return {
        ...state,
        [state.filterBy]: updatedItems,
        deleted: deletedEmail ? [...state.deleted, deletedEmail] : [...state.deleted]
      };
    }

    case ADD_EMAILS:
      return { ...state, inbox: [...action.emails, ...state.inbox] };

    case SET_SELECTION:
      return { ...state, currentSelection: action.email };

    case CLEAN_SELECTION:
      return { ...state, currentSelection: null };

    default:
      return state;
  }
};

export default reducer;
