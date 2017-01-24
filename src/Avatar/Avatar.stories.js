import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs'

import Avatar from './Avatar';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add("Photo", () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Avatar
        size={number('Size', 40)}
        src={text('Src', 'http://www.material-ui.com/v0.15.0-beta.2/images/uxceo-128.jpg')}
      />
    </div>
  ))
  .add("Text", () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Avatar
        backgroundColor={text('Background Color', '')}
        color={text('Color', '')}
        size={number('Size', 40)}
      >
      {text('Children Text', 'Z')}
      </Avatar>
    </div>
  ));
