import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';

import FlatButton from './FlatButton';
import ActionAndroid from '../svg-icons/action/android';

storiesOf('FlatButton', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <FlatButton
              label={text('Label', 'Label')}
              primary={boolean('Primary', true)}
              secondary={boolean('Secondary', false)}
              disabled={boolean('Disabled', false)}
              icon={boolean('Icon', true) && <ActionAndroid />}
              labelPosition={select('Label Position', ['after', 'before'], 'after')}
              backgroundColor={text('Background Color', '')}
              hoverColor={text('Hover Color', '')}
              rippleColor={text('Ripple Color', '')}
              href={text('Href', '')}
              target={text('Target', '_blank')}
              onKeyboardFocus={action('KeyboardFocus')}
          />
      </div>
  ));
