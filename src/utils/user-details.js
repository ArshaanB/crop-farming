import { client } from './api-client';

function createUser(userDetails) {
  return client('create_user', { data: { userDetails } });
}

export { createUser };
