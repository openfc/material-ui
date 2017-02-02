import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';
import ActionFavorite from '../svg-icons/action/favorite';
import ActionFavoriteBorder from '../svg-icons/action/favorite-border';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <RadioButtonGroup name={'shipSpeed'} defaultSelected={'not_light'}>
              <RadioButton
                  value={'light'}
                  label={'Simple'}
                  style={styles.radioButton}
              />
              <RadioButton
                  value={'not_light'}
                  label={'Selected by default'}
                  style={styles.radioButton}
              />
              <RadioButton
                  value={'ludicrous'}
                  label={'Custom icon'}
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  style={styles.radioButton}
              />
          </RadioButtonGroup>
          <RadioButtonGroup name={'shipName'} defaultSelected={'community'}>
              <RadioButton
                  value={'enterprise'}
                  label={'Disabled unchecked'}
                  disabled={true}
                  style={styles.radioButton}
              />
              <RadioButton
                  value={'community'}
                  label={'Disabled checked'}
                  disabled={true}
                  style={styles.radioButton}
              />
          </RadioButtonGroup>
          <RadioButtonGroup name={'notRight'} labelPosition={'left'} style={styles.block}>
              <RadioButton
                  value={'reverse'}
                  label={'Label on the left'}
                  style={styles.radioButton}
              />
          </RadioButtonGroup>
      </div>
  ));
