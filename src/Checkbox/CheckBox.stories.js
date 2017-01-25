import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs'

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Checkbox
        label={text('Label', 'Label')}
        checked={boolean('Checked', false)}
        disabled={boolean('Disabled', false)}
        labelPosition={select('Label Position', ['left', 'right'], 'right')}
        onCheck={action('Check')}
      />
    </div>
  ));
