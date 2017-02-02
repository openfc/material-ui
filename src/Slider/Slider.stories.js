import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import Slider from './Slider';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px'), width: text('Width', '')}}>
        <Slider
            axis={select('Axis', ['x', 'x-reverse', 'y', 'y-reverse'], 'x')}
            disableFocusRipple={boolean('Disable Focus Ripple', false)}
            disabled={boolean('Disabled', false)}
            max={number('Max', 1)}
            min={number('Min', 0)}
            required={boolean('Required', true)}
            step={number('Step', 0.01)}
            value={number('Value', 0.5)}
            onChange={action('Change')}
            onDragStart={action('DragStart')}
            onDragStop={action('DragStop')}
        />
    </div>
  ));
  