import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open'

import Badge from './Badge';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('NotificationsIcon', () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Badge
        badgeContent={text('BadgeContent', '99')}
        primary={boolean('Primary', true)}
        secondary={boolean('Secondary', false)}
      >
        <NotificationsIcon />
      </Badge>
    </div>
  ))
  .add('FolderIconAndUploadIcon', () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Badge
        badgeContent={<IconButton tooltip={text('Tooltip', 'Backup')}><UploadIcon /></IconButton>}
      >
        <FolderIcon />
      </Badge>
    </div>
  ))
  .add('Copyright', () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <Badge
        badgeContent='&copy;'
        badgeStyle={{fontSize: number('FontSize', 20)}}
      >
        {text('Content', 'Company name')}
      </Badge>
    </div>
  ));
