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
      <p
        css={{
          fontSize: '22px',
          marginTop: '25px',
        }}
      >
        Crop Farming takes the process of earning yield on your crypto-assets and makes it
        accessible to you, general public.
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
        FAQ (more Q&A coming soon)
      </p>
      <p css={{ fontSize: '1.25em' }}>What do you actually do with my money?</p>
      <ul css={{ fontSize: '1.10em' }}>
        <li>
          To keep it brief (a more in-depth explanation is coming soon): owning crypto assets is
          like owning an extra house.
        </li>
        <li>
          You don't want to leave your house idle so you decide to rent it out. Similarly, you can
          earn income on your crypto assets.
        </li>
        <li>
          To use more accurate technical terms (explanations coming soon), we will be "yield
          farming" after converting your dollars to certain crypto assets (i.e. stablecoins like
          USDC).
        </li>
      </ul>
      <p css={{ fontSize: '1.25em' }}>I have a problem, how do I get in touch?</p>
      <ul css={{ fontSize: '1.10em' }}>
        <li>
          Email questions@cropfarming.org if you have any urgent questions or want to get in touch!
        </li>
      </ul>
    </div>
  );
}

export { HomeScreen };
