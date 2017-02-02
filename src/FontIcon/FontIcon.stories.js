import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import FontIcon from './FontIcon';

storiesOf('FontIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <FontIcon
              color={text('Color', '')}
              hoverColor={text('Hover Color', 'Red')}
          >
              {text('Text', 'Text')}
          </FontIcon>
      </div>
  ));
