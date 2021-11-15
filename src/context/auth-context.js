/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { queryCache } from 'react-query';
import * as auth from 'auth-provider';
import { client } from 'utils/api-client';
import { useAsync } from 'utils/hooks';
import { FullPageSpinner, FullPageErrorFallback } from 'components/lib';
// import { createUser } from 'utils/user-details';

async function bootstrapAppData() {
  let user = null;

  const token = await auth.getToken();
  if (token) {
    const data = await auth.recover();
    user = data?.email;
  }
  return user;
}

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync();

  React.useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = React.useCallback(
    (form) => auth.login(form).then((user) => setData(user.email)),
    [setData]
  );
  // Is better named registerAndLogin (but it only logs in on successful
  //  register).
  const register = React.useCallback(
    (form) => {
      return auth.register(form).then(() => {
        console.log(form.full_name);
        const NewUser = {
          email: form.email,
          name: form.full_name,
          registrationDate: new Date(),
        };
        client('create_user', { data: { ...NewUser } });
        login(form);
      });
    },
    [login]
  );
  const logout = React.useCallback(() => {
    auth.logout();
    queryCache.clear();
    setData(null);
  }, [setData]);

  const value = React.useMemo(
    () => ({ user, login, logout, register }),
    [login, logout, register, user]
  );

  if (isLoading || isIdle) {
    return <FullPageSpinner />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

function useClient() {
  const { user } = useAuth();
  const token = user?.token;
  return React.useCallback((endpoint, config) => client(endpoint, { ...config, token }), [token]);
}

export { AuthProvider, useAuth, useClient };
