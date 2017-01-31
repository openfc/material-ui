import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import DropDownMenu from './DropDownMenu';
import MenuItem from '../MenuItem';

storiesOf('DropDownMenu', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <DropDownMenu
            value={text('Value', '1')}
            animated={boolean('Animated', true)}
            autoWidth={boolean('Auto Width', true)}
            disabled={boolean('Disabled', false)}
            maxHeight={number('Max Height', 500)}
            openImmediately={boolean('Open Immediately', false)}
            onChange={action('Change')}
            onClose={action('Close')}
        >
            <MenuItem value={'1'} primaryText={text('Menu Item 1 Text', 'Самый первый')} />
            <MenuItem value={'2'} primaryText={text('Menu Item 2 Text', 'Просто второй')} />
            <MenuItem value={'3'} primaryText={text('Menu Item 3 Text', 'Средний')} />
            <MenuItem value={'4'} primaryText={text('Menu Item 4 Text', 'Предпоследний')} />
            <MenuItem value={'5'} primaryText={text('Menu Item 5 Text', 'Я в самом конце :(')} />
        </DropDownMenu>
    </div>
  ));
