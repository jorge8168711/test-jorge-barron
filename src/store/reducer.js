import {
  FETCH_EMAILS,
  FETCH_EMAILS_SUCCESS,
  FETCH_EMAILS_FAILED,
  SET_FILTER,
  SET_SEARCH,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  MOVE_TO_SPAM,
  DELETE_EMAIL
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
      const itemIndex = state[state.filterBy].findIndex((item) => item.id === action.itemId);
      const updatedItems = [...state[state.filterBy]];
      const deletedEmail = updatedItems.splice(itemIndex, 1)[0];

      return { ...state, [state.filterBy]: updatedItems, spam: [...state.spam, deletedEmail] };
    }

    case DELETE_EMAIL: {
      const itemIndex = state[state.filterBy].findIndex((item) => item.id === action.itemId);
      const updatedItems = [...state[state.filterBy]];
      const deletedEmail = updatedItems.splice(itemIndex, 1)[0];

      return {
        ...state,
        [state.filterBy]: updatedItems,
        deleted: [...state.deleted, deletedEmail]
      };
    }

    default:
      return state;
  }
};

export default reducer;
