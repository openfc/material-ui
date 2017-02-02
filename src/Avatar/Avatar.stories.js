import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';

import Avatar from './Avatar';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('Photo', () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <Avatar
              size={number('Size', 40)}
              src={text('Src', '/images/avatars/uxceo-128.jpg')}
          />
      </div>
  ))
  .add('Text', () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <Avatar
              backgroundColor={text('Background Color', '')}
              color={text('Color', '')}
              size={number('Size', 40)}
          >
              {text('Children Text', 'Z')}
          </Avatar>
      </div>
  ));
