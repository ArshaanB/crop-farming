/** @jsx jsx */
import { jsx } from '@emotion/core';

// import * as React from 'react';

function HomeScreen() {
  return (
    <div>
      <p
        css={{
          fontSize: '22px',
          marginTop: '25px',
        }}
      >
        You can earn 20%, 50% or 150% on your dollars every year, here's how!
      </p>
      <p css={{ fontSize: '22px', display: 'flex' }}>
        <span css={{ fontSize: '16px', marginRight: '10px', width: '4em', alignSelf: 'center' }}>
          Step 1
        </span>
        Click the bright green "Getting Started" button at the top of the page to set up your
        account for Step 2 and Step 3.
      </p>
      <p css={{ fontSize: '22px', display: 'flex' }}>
        <span css={{ fontSize: '16px', marginRight: '10px', width: '4em', alignSelf: 'center' }}>
          Step 2
        </span>{' '}
        Deposit your funds.
      </p>
      <p css={{ fontSize: '22px', display: 'flex' }}>
        <span css={{ fontSize: '16px', marginRight: '10px', width: '4em', alignSelf: 'center' }}>
          Step 3
        </span>{' '}
        Browse our collection of investments and select one that fits your risk profile best.
      </p>
      <p css={{ fontSize: '22px', marginTop: '2em' }}>
        Now sit back, relax, and watch investment grow.
      </p>

      <p
        css={{
          fontSize: '22px',
          marginTop: '2em',
        }}
      >
        FAQ (Coming Soon!)
      </p>
      <p>
        Email questions@cropfarming.org if you have any urgent questions or want to get in touch!
      </p>
    </div>
  );
}

export { HomeScreen };
