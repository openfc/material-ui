import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import Menu from './Menu';
import MenuItem from '../MenuItem';
import Paper from '../Paper';
import Divider from '../Divider';

import RemoveRedEye from '../svg-icons/image/remove-red-eye';
import PersonAdd from '../svg-icons/social/person-add';
import ContentLink from '../svg-icons/content/link';
import ContentCopy from '../svg-icons/content/content-copy';
import Download from '../svg-icons/file/file-download';
import Delete from '../svg-icons/action/delete';
import ArrowDropRight from '../svg-icons/navigation-arrow-drop-right';

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (    
    <Paper style={{display: 'inline-block', float: 'left', margin: text('Margin', '50px')}}>
        <Menu
            autoWidth={boolean('Auto Width', true)}
            width={text('Menu Width', '250px')}
            desktop={boolean('Desktop', false)}
            maxHeight={text('Max Height', null)}
            initiallyKeyboardFocused={boolean('Initially Keyboard Focused', false)}
            disableAutoFocus={boolean('Disable Auto Focus', false)}
            multiple={boolean('Disable Auto Focus', false)}
            onChange={action('Change')}
            onEscKeyDown={action('EscKeyDown')}
            onItemTouchTap={action('ItemTouchTap')}
            onMenuItemFocusChange={action('MenuItemFocusChange')}
        >
            <MenuItem 
                primaryText={text('Item1 Primary Text', 'Preview')}
                secondaryText={text('Item1 Secondary Text', '')}
                leftIcon={boolean('Item1 Left Icon', true) && <RemoveRedEye />}
                rightIcon={boolean('Item1 Right Icon', false) && <RemoveRedEye />}
                disabled={boolean('Item1 Disabled', false)}
                checked={boolean('Item1 Checked', false)}
                insetChildren={boolean('Item1 Inset Children', false)}
                onTouchTap={action("Item1 TouchTap")}
            />
            <MenuItem 
                primaryText={text('Item2 Primary Text', 'Share')}
                secondaryText={text('Item2 Secondary Text', '')}
                leftIcon={boolean('Item2 Left Icon', true) && <PersonAdd />}
                rightIcon={boolean('Item2 Right Icon', true) && <ArrowDropRight />}
                disabled={boolean('Item2 Disabled', false)}
                checked={boolean('Item2 Checked', false)}
                insetChildren={boolean('Item2 Inset Children', false)}
                onTouchTap={action("Item2 TouchTap")}
                menuItems={[
                    <MenuItem primaryText="Facebook" />,
                    <MenuItem primaryText="VKontakte" />,
                    <MenuItem primaryText="Odnoklassniki" />,
                    <MenuItem 
                        primaryText="Other..."
                        rightIcon={<ArrowDropRight />}
                        menuItems={[
                            <MenuItem primaryText="Item1" />,
                            <MenuItem primaryText="Item2" />,
                            <MenuItem primaryText="Item3" />,
                        ]}
                    />,
                ]}
            />
            <MenuItem 
                primaryText={text('Item3 Primary Text', 'Get links')}
                secondaryText={text('Item3 Secondary Text', '')}
                leftIcon={boolean('Item3 Left Icon', true) && <ContentLink />}
                rightIcon={boolean('Item3 Right Icon', false) && <ContentLink />}
                disabled={boolean('Item3 Disabled', false)}
                checked={boolean('Item3 Checked', false)}
                insetChildren={boolean('Item3 Inset Children', false)}
                onTouchTap={action("Item3 TouchTap")}
            />
            <Divider />
            <MenuItem 
                primaryText={text('Item4 Primary Text', 'Make a copy')}
                secondaryText={text('Item4 Secondary Text', '')}
                leftIcon={boolean('Item4 Left Icon', true) && <ContentCopy />}
                rightIcon={boolean('Item4 Right Icon', false) && <ContentCopy />}
                disabled={boolean('Item4 Disabled', false)}
                checked={boolean('Item4 Checked', false)}
                insetChildren={boolean('Item4 Inset Children', false)}
                onTouchTap={action("Item4 TouchTap")}
            />
            <MenuItem 
                primaryText={text('Item5 Primary Text', 'Download')}
                secondaryText={text('Item5 Secondary Text', 'Ctrl+D')}
                leftIcon={boolean('Item5 Left Icon', true) && <Download />}
                rightIcon={boolean('Item5 Right Icon', false) && <Download />}
                disabled={boolean('Item5 Disabled', false)}
                checked={boolean('Item5 Checked', false)}
                insetChildren={boolean('Item5 Inset Children', false)}
                onTouchTap={action("Item5 TouchTap")}
            />
            <Divider />
            <MenuItem 
                primaryText={text('Item6 Primary Text', 'Remove')}
                secondaryText={text('Item6 Secondary Text', '')}
                leftIcon={boolean('Item6 Left Icon', true) && <Delete />}
                rightIcon={boolean('Item6 Right Icon', false) && <Delete />}
                disabled={boolean('Item6 Disabled', false)}
                checked={boolean('Item6 Checked', false)}
                insetChildren={boolean('Item6 Inset Children', false)}
                onTouchTap={action("Item6 TouchTap")}
            />
        </Menu>
    </Paper>
  ));