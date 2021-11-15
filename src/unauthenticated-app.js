/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Input, Button, Spinner, FormGroup, ErrorMessage } from 'components/lib';
import { Modal, ModalContents, ModalOpenButton } from 'components/modal';
import { InfoAlert } from 'components/lib';
import { useAuth } from 'context/auth-context';
import { useAsync } from 'utils/hooks';
import * as colors from './styles/colors';

function LoginForm({ onSubmit, submitButton }) {
  const { isLoading, isError, error, run } = useAsync();
  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    run(
      onSubmit({
        email: email.value,
        password: password.value,
      })
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <FormGroup>
        <label htmlFor='email'>Email</label>
        <Input id='email' type='email' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <Input id='password' type='password' />
      </FormGroup>
      <div>
        {React.cloneElement(
          submitButton,
          { type: 'submit' },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner css={{ marginLeft: 5 }} /> : null
        )}
      </div>
      {isError ? <ErrorMessage error={error} /> : null}
    </form>
  );
}

function UnauthenticatedApp() {
  const { login, register } = useAuth();

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <img src='logo.png' width='80' height='80' alt='' />
      <h1
        css={{
          color: colors.green,
        }}
      >
        Crop Farming
      </h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant='primary'>Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Login form' title='Login'>
            <LoginForm onSubmit={login} submitButton={<Button variant='primary'>Login</Button>} />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant='secondary'>Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Registration form' title='Register'>
            <LoginForm
              onSubmit={register}
              submitButton={<Button variant='secondary'>Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
      <InfoAlert>
        It's highly recommended you use this website on a larger screen (i.e. a laptop, desktop,
        iPad, etc.)
      </InfoAlert>
    </div>
  );
}

export default UnauthenticatedApp;
