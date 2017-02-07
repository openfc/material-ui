import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean, text } from '@kadira/storybook-addon-knobs';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from '../Toolbar';
import IconMenu from '../IconMenu/IconMenu';
import IconButton from '../IconButton';
import FontIcon from '../FontIcon';
import MenuItem from '../MenuItem';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import RaisedButton from '../RaisedButton';

import NavigationExpandMoreIcon from '../svg-icons/navigation/expand-more';


storiesOf('Toolbar', module)
    .addDecorator(withKnobs)
    .addDecorator(muiTheme())
    .add(null, () => (
        <div style={{ padding: text('Padding', '50px') }}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <Toolbar noGutter={boolean('No Gutter', false)}>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={3}>
                        <MenuItem value={1} primaryText="All Broadcasts" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <FontIcon className="material-icons">line_weight</FontIcon>
                    <ToolbarSeparator />
                    <RaisedButton label="Create Broadcast" primary={true} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        </div>
    ));
