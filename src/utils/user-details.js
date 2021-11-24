import { getDatabase, ref, set } from 'firebase/database';

function createUser(userId, full_name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    full_name: full_name,
    email: email,
    registrationDate: Date.now(),
  });
}

export { createUser };
