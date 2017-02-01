import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import Chip from './Chip';
import Avatar from '../Avatar/Avatar';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Chip
          backgroundColor={text('Background Color', '#70BAF6')}
          labelColor={text('Label Color', null)}
          onRequestDelete={action('Request Delete')}
          onTouchTap={boolean('AAA', false) ? action('Touch Tap') : null}
        >
        {boolean('Text Avatar Display', false) &&
          <Avatar 
            color={text('Avatar Color', '#70BAF6')}
            backgroundColor={text('Avatar Background Color', '#1A237E')}
          >
            {text('Avatar Text', 'AZ')}
          </Avatar>
        }
        {boolean('Photo Avatar Display', true) &&
          <Avatar
            src={text('Src', '/images/avatars/uxceo-128.jpg')}
            />
        }
          {text('Chip Text', 'Chip Text')}
        </Chip>
    </div>
  ));
