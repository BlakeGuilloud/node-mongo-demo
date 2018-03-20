import User from './model';

export function fetchUsers() {
  return User.find({});
}

export function createUser(payload) {
  return User.create(payload);
}
