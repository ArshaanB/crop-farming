/** @jsx jsx */
import { jsx } from '@emotion/core';

// import * as React from 'react';

function DepositSuccessScreen() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      Success! Thanks for depositing funds and submitting the form. Your account will be updated with your
      deposit within 24 hours (but often much sooner).
    </div>
  );
}

export { DepositSuccessScreen };
