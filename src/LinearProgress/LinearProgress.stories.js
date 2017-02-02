import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, number, select } from '@kadira/storybook-addon-knobs';

import LinearProgress from './LinearProgress';

storiesOf('LinearProgress', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <LinearProgress
              color={text('Color', null)}
              min={number('Min', 0)}
              max={number('Max', 100)}
              value={number('Value', 0)}
              size={number('Size', 40)}
              mode={select('Mode', ['determinate', 'indeterminate'], 'indeterminate')}
              style={{ width: number('Width', null) }}
          />
      </div>
  ));
