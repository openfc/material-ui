import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import IconMenu from './IconMenu';
import IconButton from '../IconButton'
import MoreVertIcon from '../svg-icons/navigation/more-vert';
import MenuItem from '../MenuItem';
import Divider from '../Divider';

storiesOf('IconMenu', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <IconMenu        
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{
                horizontal: select('Anchor Origin Horizontal', ['left', 'middle', 'right'], 'left'),
                vertical: select('Anchor Origin Vertical', ['top', 'center', 'bottom'], 'bottom'),
            }}
            targetOrigin={{
                horizontal: select('Target Origin Horizontal', ['left', 'middle', 'right'], 'left'),
                vertical: select('Target Origin Vertical', ['top', 'center', 'bottom'], 'bottom'),
            }}
            touchTapCloseDelay={number('Touch Tap Close Delay', 200)}
            animated={boolean('Animated', true)}
            multiple={boolean('Multiple', false)}
            maxHeight={number('Max Height', 500)}
            onItemTouchTap={action('ItemTouchTap')}
            onKeyboardFocus={action('KeyboardFocus')}
            onRequestChange={action('RequestChange')}
            onTouchTap={action('TouchTap')}
        >
            <MenuItem value={'1'} primaryText={text('Menu Item 1 Text', 'Сделай то')} />
            <MenuItem value={'2'} primaryText={text('Menu Item 2 Text', 'Сделай сё')} />
            <MenuItem value={'3'} primaryText={text('Menu Item 3 Text', 'Кофе, пожалуйста')} />
            <MenuItem value={'4'} primaryText={text('Menu Item 4 Text', 'Сделай хоть что-нибудь!')} />
            {boolean('Display divider', true) &&
                <Divider />
            }
            <MenuItem value={'5'} primaryText={text('Menu Item 5 Text', 'Помоги мне')} />
        </IconMenu>
    </div>
  ));
