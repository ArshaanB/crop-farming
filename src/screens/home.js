/** @jsx jsx */
import { jsx } from '@emotion/core';

// import * as React from 'react';

function HomeScreen() {
  return (
    <div>
      <p
        css={{
          fontSize: '22px',
        }}
      >
        You can earn 20%, 50% or 150% on your dollars every year, here's how!
      </p>
      <p>
        <span css={{ fontSize: '20px', marginRight: '10px' }}>Step 1</span> Deposit your funds.
      </p>
      <p>
        <span css={{ fontSize: '20px', marginRight: '10px' }}>Step 2</span> Browse our collection of
        investments and select one that fits your risk profile best.
      </p>
      <p>
        <span css={{ fontSize: '20px', marginRight: '10px' }}>Step 3</span> Check back every day and
        see your investment grow.
      </p>
      <hr />
      <p>
        Click the bright green "Getting Started" button at the top of the page to set up your
        account.
      </p>
      <hr />
      <p
        css={{
          fontSize: '22px',
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
