import User from './model';

export function fetchUsers() {
  return User.find({})
}