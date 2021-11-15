/** @jsx jsx */
import { jsx } from '@emotion/core';

// import * as React from 'react';

function AboutScreen() {
  return (
    <div>
      <p
        css={{
          fontSize: '1.5em',
          marginTop: '25px',
        }}
      >
        Hey, nice to meet you, I'm Arshaan. Here are links to some of my profiles so you can put a face to all this text.
      </p>
      <ul
        css={{
          fontSize: '1.25em',
        }}
      >
        <li>
          <a href='https://www.linkedin.com/in/arshaan/'>Linkedin</a>
        </li>
        <li>
          <a href='https://twitter.com/arshaan_b'>Twitter</a>
        </li>
        <li>
          <a href='https://github.com/ArshaanB/'>Github</a>
        </li>
      </ul>
    </div>
  );
}

export { AboutScreen };
