/** @jsx jsx */
import { jsx } from '@emotion/core';

import { FAQ } from '../components/faq';

function HomeScreen() {
  return (
    <div>
      <p
        css={{
          fontSize: '22px',
          marginTop: '25px',
        }}
      >
        You can earn 20%, 50% or 150% on your dollars every year!
      </p>
      <p
        css={{
          fontSize: '22px',
          marginTop: '25px',
        }}
      >
        Crop Farming takes the process of earning yield on your crypto-assets and makes it
        accessible to you, the general public.
      </p>
      <p css={{ fontSize: '22px', display: 'flex' }}>
        <span css={{ fontSize: '16px', marginRight: '10px', width: '4em', alignSelf: 'center' }}>
          Step 1
        </span>
        Click the bright green "Getting Started" button at the top of the page.
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
        Now sit back, relax, and watch your investment grow.
      </p>

      <FAQ></FAQ>
    </div>
  );
}

export { HomeScreen };
