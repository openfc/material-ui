import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Checkbox from './Checkbox';

import ActionFavorite from '../svg-icons/action/favorite';
import ActionFavoriteBorder from '../svg-icons/action/favorite-border';
import Visibility from '../svg-icons/action/visibility';
import VisibilityOff from '../svg-icons/action/visibility-off';

const styles = {
    checkbox: {
        marginBottom: 16,
    },
};

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px'), maxWidth: 250 }}>
          <Checkbox
              label={'Simple'}
              style={styles.checkbox}
          />
          <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label={'Custom icon'}
              style={styles.checkbox}
          />
          <Checkbox
              checkedIcon={<Visibility />}
              uncheckedIcon={<VisibilityOff />}
              label={'Custom icon of different shapes'}
              style={styles.checkbox}
          />
          <Checkbox
              label={'Disabled unchecked'}
              disabled={true}
              style={styles.checkbox}
          />
          <Checkbox
              label={'Disabled checked'}
              checked={true}
              disabled={true}
              style={styles.checkbox}
          />
          <Checkbox
              label={'Label on the left'}
              labelPosition={'left'}
              style={styles.checkbox}
          />
      </div>
  ));
