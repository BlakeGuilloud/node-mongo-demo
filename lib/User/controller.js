import { sendSuccess, sendError } from '../responses';

import { fetchUsers } from './service';

export function getUser(req, res) {
  return Promise.resolve(req)
    .then(fetchUsers)
    .then(sendSuccess(res))
    .catch(sendError(res));
}