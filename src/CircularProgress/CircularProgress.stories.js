import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import CircularProgress from './CircularProgress';

storiesOf('CircularProgress', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <CircularProgress
            color={text('Color', null)}
            min={number('Min', 0)}
            max={number('Max', 100)}
            value={number('Value', 0)}
            size={number('Size', 40)}
            thickness={number('Thickness', 3.5)}
            mode={select('Mode', ['determinate', 'indeterminate'], 'indeterminate')}
        />
    </div>
  ));
