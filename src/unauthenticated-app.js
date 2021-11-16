/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Input, Button, Spinner, FormGroup, ErrorMessage } from 'components/lib';
import { Modal, ModalContents, ModalOpenButton } from 'components/modal';
import { InfoAlert } from 'components/lib';
import { useAuth } from 'context/auth-context';
import { useAsync } from 'utils/hooks';
import * as colors from './styles/colors';

function LoginForm({ onSubmit, submitButton, formType = 'login' }) {
  const { isLoading, isError, error, run } = useAsync();
  function handleSubmit(event) {
    event.preventDefault();
    const { email, password, full_name = null } = event.target.elements;
    let submitForm = {
      full_name: full_name?.value,
      email: email.value,
      password: password.value,
    };
    run(onSubmit({ ...submitForm }));
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
      {formType === 'register' ? (
        <FormGroup>
          <label htmlFor='full_name'>Full Name</label>
          <Input id='full_name' type='text' />
        </FormGroup>
      ) : null}
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
      <p
        css={{
          color: colors.green,
          fontSize: '2.5em',
          fontWeight: '600',
          marginBottom: '0.5em',
        }}
      >
        Crop Farming
      </p>
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
            <LoginForm
              onSubmit={login}
              submitButton={
                <Button variant='primary' css={{ display: 'flex', flexDirection: 'row' }}>
                  Login
                </Button>
              }
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant='secondary'>Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Registration form' title='Register'>
            <LoginForm
              onSubmit={register}
              submitButton={
                <Button variant='secondary' css={{ display: 'flex', flexDirection: 'row' }}>
                  Register
                </Button>
              }
              formType='register'
            />
          </ModalContents>
        </Modal>
      </div>
      <InfoAlert>
        We recommended using this website on a larger screen (e.g. a laptop, a desktop computer, or
        an iPad).
      </InfoAlert>
    </div>
  );
}

export default UnauthenticatedApp;
