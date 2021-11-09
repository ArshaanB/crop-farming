import GoTrue from 'gotrue-js';

// pretend this is firebase, netlify, or auth0's code.
// you shouldn't have to implement something like this in your own app

// Instantiate the GoTrue auth client with an optional configuration
// TODO: Replace below URL with const authURL = process.env.REACT_APP_AUTH_URL;
const gotruejsauth = new GoTrue({
  APIUrl: 'https://cropfarming.org/.netlify/identity',
  audience: '',
  setCookie: false,
});

const localStorageKey = '__auth_provider_token__';

async function getToken() {
  // if we were a real auth provider, this is where we would make a request
  // to retrieve the user's token. (It's a bit more complicated than that...
  // but you're probably not an auth provider so you don't need to worry about it).
  return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse(allDetails) {
  const userToken = allDetails?.token?.access_token;
  window.localStorage.setItem(localStorageKey, userToken);
  return allDetails;
}

function login({ email, password }) {
  return gotruejsauth.login(email, password).then(handleUserResponse);
}

function register({ email, password }) {
  return gotruejsauth.signup(email, password);
}

async function logout() {
  window.localStorage.removeItem(localStorageKey);
}

/*
// an auth provider wouldn't use your client, they'd have their own
// so that's why we're not just re-using the client
const authURL = process.env.REACT_APP_AUTH_URL;

async function client(endpoint, data) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  return window.fetch(`${authURL}/${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
*/

export { getToken, login, register, logout, localStorageKey };
