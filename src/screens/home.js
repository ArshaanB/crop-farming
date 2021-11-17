/** @jsx jsx */
import { jsx } from '@emotion/core';

import { CTA } from '../components/cta';
import { Explainer } from '../components/explainer';
import { FAQ } from '../components/faq';

function HomeScreen() {
  return (
    <div>
      <CTA></CTA>
      <Explainer></Explainer>
      <FAQ></FAQ>
    </div>
  );
}

export { HomeScreen };
