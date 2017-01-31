import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import IconButton from './IconButton';
import ActionHome from '../svg-icons/action/home';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <IconButton            
            tooltip={text('Tooltip', 'Tooltip')}            
            touch={boolean('Touch', false)}            
            disabled={boolean('Disabled', false)}
            disableTouchRipple={boolean('Disable Touch Ripple', false)}
            tooltipPosition={select('Tooltip Position', ['bottom-center', 'top-center', 'bottom-right', 'top-right', 'bottom-left', 'top-left'], 'bottom-center')}            
            style={{width: text('Style Width', '50'), height: text('Style Height', '50'), padding: text('Style Padding', null)}}
            iconStyle={{width: text('Icon Style Width', null), height: text('Icon Style Height', null), color: text('Icon Style Color', null)}}
            href={text('Href', '')}
            target={text('Target', '_blank')}
            onKeyboardFocus={action('KeyboardFocus')}
        >
            <ActionHome />
        </IconButton>
    </div>
  ));
