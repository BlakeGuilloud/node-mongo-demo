import { sendSuccess, sendError } from '../responses';

import { fetchUsers, createUser } from './service';

export function getUsers(req, res) {
  return Promise.resolve(req)
    .then(fetchUsers)
    .then(sendSuccess(res))
    .catch(sendError(res));
}

export function postUser(req, res) {
  return Promise.resolve(req)
    .then(({ body }) => createUser(body))
    .then(sendSuccess(res))
    .catch(sendError(res));
}