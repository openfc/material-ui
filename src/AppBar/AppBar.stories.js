import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import AppBar from './AppBar';

storiesOf('AppBar', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <AppBar
        showMenuIconButton={boolean('Show Menu Icon Button', true)}
        title={text('Title', 'Заголовок')}
        onLeftIconButtonTouchTap={action('LeftIconButtonTouchTap')}
        onRightIconButtonTouchTap={action('RightIconButtonTouchTap')}
        onTitleTouchTap={action('TitleTouchTap')}
      />
    </div>
  ));
