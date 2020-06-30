export const FETCH_EMAILS = 'FETCH_EMAILS';
export const FETCH_EMAILS_SUCCESS = 'FETCH_EMAILS_SUCCESS';
export const FETCH_EMAILS_FAILED = 'FETCH_EMAILS_FAILED';
export const ASYNC_ACTION = 'ASYNC_ACTION';

export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH = 'SET_SEARCH';

export const MARK_AS_READ = 'MARK_AS_READ';

export function asyncAction(action) {
  return { ASYNC_ACTION: action };
}

export function fetchEmails() {
  return asyncAction({ type: FETCH_EMAILS });
}

export function fetchEmailsSuccess(emails) {
  return { type: FETCH_EMAILS_SUCCESS, emails };
}

export function fetchEmailsFailed(error) {
  return { type: FETCH_EMAILS_FAILED, error };
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}
export function setSearch(search) {
  return { type: SET_SEARCH, search };
}

export function markAsRead(itemId) {
  return { type: MARK_AS_READ, itemId };
}
