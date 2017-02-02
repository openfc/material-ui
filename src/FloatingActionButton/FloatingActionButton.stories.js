import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';

import FloatingActionButton from './FloatingActionButton';
import ContentAdd from '../svg-icons/content/add';
import ActionAndroid from '../svg-icons/action/android';

storiesOf('FloatingActionButton', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <FloatingActionButton
              mini={boolean('Mini', false)}
              secondary={boolean('Secondary', false)}
              disabled={boolean('Disabled', false)}
              href={text('Href', '')}
              target={text('Target', '_blank')}
              backgroundColor={text('Background Color', '')}
              disabledColor={text('Disabled Color', '')}
          >
              {boolean('Add Icon Display', true) && <ContentAdd />}
              {boolean('Android Icon Display', false) && <ActionAndroid />}
          </FloatingActionButton>
      </div>
  ));
