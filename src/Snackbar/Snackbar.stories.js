import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';

import Snackbar from './Snackbar';

storiesOf('Snackbar', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <Snackbar
          action={text('Action', 'Undo')}
          open={boolean('Open', true)}
          message={text('Message', 'Message text')}
          onActionTouchTap={action('ActionTouchTap')}
          onRequestClose={action('RequestClose')}
      />
  ));
