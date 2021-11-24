import { getDatabase, ref, child, set, push, get } from 'firebase/database';

function createBalances(userId) {
  const db = getDatabase();
  set(ref(db, 'balances/' + userId), {
    availableBalance: 0,
    invested: {
      pool1: 0,
      pool2: 0,
      pool3: 0,
    },
  });
}

function depositTicket(userId, amount, depositMethod, referenceNumber) {
  const db = getDatabase();
  const userDepositsListRef = ref(db, 'deposits/' + userId);
  const newUserDepositRef = push(userDepositsListRef);
  return set(newUserDepositRef, {
    amount: amount,
    depositMethod: depositMethod,
    referenceNumber: referenceNumber,
  });
}

function getCustomer(userId) {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `balances/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export { createBalances, depositTicket, getCustomer };
