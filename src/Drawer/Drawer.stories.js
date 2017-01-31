import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import Drawer from './Drawer';
import MenuItem from '../MenuItem';
import AppBar from '../AppBar';

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <Drawer 
        open={boolean('Open', true)}
        docked={boolean('Docked', false)}
        openSecondary={boolean('Open Secondary', false)}
        onRequestChange={action('RequestChange')}
        width={number('Width', null)}
    >
        {boolean('App Bar Display', true) &&
            <AppBar title={text('App Bar Title', 'AppBar')} />
        }
        <MenuItem>{text('Menu Item 1 Text', 'Menu Item 1')}</MenuItem>
        <MenuItem>{text('Menu Item 2 Text', 'Menu Item 2')}</MenuItem>
        <MenuItem>{text('Menu Item 3 Text', 'Menu Item 3')}</MenuItem>
    </Drawer>
  ));
