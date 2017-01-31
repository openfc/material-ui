import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import FontIcon from './FontIcon';

storiesOf('FontIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <FontIcon
            color={text('Color', '')}
            hoverColor={text('Hover Color', 'Red')}
        >
            {text('Text', 'Text')}
        </FontIcon>
    </div>
  ));
