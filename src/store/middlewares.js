import { ASYNC_ACTION } from './actions';
import * as json from '../assets/mail-data.json';
import shortid from 'shortid';

export const logger = () => (next) => (action) => {
  if (action[ASYNC_ACTION]) {
    next({
      type: action[ASYNC_ACTION].type + '_SUCCESS',
      emails: json.data.map((item) => ({ id: shortid.generate(), ...item }))
    });
  } else {
    return next(action);
  }
};
