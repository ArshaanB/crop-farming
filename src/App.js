import * as React from 'react';

import './App.css';
import { FullPageSpinner } from 'components/lib';
// TODO: import {useAuth} from './context/auth-context'

const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ 'authenticated-app')
);
const UnauthenticatedApp = React.lazy(() => import('unauthenticated-app'));
function App() {
  // TODO: const { user } = useAuth();
  const user = null;
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
