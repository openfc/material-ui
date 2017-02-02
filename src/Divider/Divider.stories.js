import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';

import Divider from './Divider';
import Paper from '../Paper';
import TextField from '../TextField';

const style = {
    marginLeft: 20,
};

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <div style={{ padding: text('Padding', '50px') }}>
          <Paper zDepth={2}>
              <TextField hintText={'First name'} style={style} underlineShow={false} />
              <Divider inset={boolean('Divider1 Inset', false)} />
              <TextField hintText={'Middle name'} style={style} underlineShow={false} />
              <Divider inset={boolean('Divider2 Inset', false)} />
              <TextField hintText={'Last name'} style={style} underlineShow={false} />
              <Divider inset={boolean('Divider3 Inset', false)} />
              <TextField hintText={'Email address'} style={style} underlineShow={false} />
              <Divider inset={boolean('Divider4 Inset', false)} />
          </Paper>
      </div>
  ));
