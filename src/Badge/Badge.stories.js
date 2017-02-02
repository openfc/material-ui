import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Badge from './Badge';
import IconButton from '../IconButton';

import UploadIcon from '../svg-icons/file/cloud-upload';
import FolderIcon from '../svg-icons/file/folder-open';
import NotificationsIcon from '../svg-icons/social/notifications';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('NotificationsIcon', () => (
      <div style={{ padding: text('Padding', '50px') }}>
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
      <div style={{ padding: text('Padding', '50px') }}>
          <Badge
              badgeContent={
                  <IconButton tooltip={text('Tooltip', 'Backup')}>
                      <UploadIcon />
                  </IconButton>
              }
          >
              <FolderIcon />
          </Badge>
      </div>
  ))
  .add('Copyright', () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <Badge
              badgeContent={'&copy;'}
              badgeStyle={{ fontSize: number('FontSize', 20) }}
          >
              { text('Content', 'Company name') }
          </Badge>
      </div>
  ));
