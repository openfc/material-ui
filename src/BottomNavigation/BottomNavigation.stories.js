import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import BottomNavigation from './BottomNavigation';
import BottomNavigationItem from './BottomNavigationItem';
import IconRestore from '../svg-icons/action/restore';
import IconFavorite from '../svg-icons/action/favorite';
import IconLocationOn from '../svg-icons/communication/location-on';

storiesOf('BottomNavigation', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
        <div style={{'padding': text('Padding', '50px')}}>
            <BottomNavigation selectedIndex={number('Selected Index', 0)}>
                <BottomNavigationItem
                    label='Recents'
                    icon={<IconRestore />}
                />
                <BottomNavigationItem
                    label='Favorites'
                    icon={<IconFavorite />}                    
                />
                <BottomNavigationItem
                    label='Nearby'
                    icon={<IconLocationOn />}
                />
            </BottomNavigation>
        </div>
  ));
