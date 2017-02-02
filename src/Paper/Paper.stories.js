import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Paper from './Paper';

storiesOf('Paper', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <Paper
          style={{
              margin: text('Margin', '50px'),
              width: text('Width', '300px'),
              height: text('Height', '250px'),
              display: 'inline-block',
          }}
          zDepth={number('Z Depth', 1)}
          rounded={boolean('Rounded', true)}
          circle={boolean('Circle', false)}
      />
  ));
