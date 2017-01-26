import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import DatePicker from './DatePicker';

storiesOf('DatePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <DatePicker
        DateTimeFormat={Intl.DateTimeFormat}        
        disabled={boolean('Disabled', false)}
        disableYearSelection={boolean('Disable Year Selection', false)}
        hintText={text('Hint Text', 'Дата')}
        mode={select('Mode', ['portrait', 'landscape'], 'portrait')}
        container={select('Container', ['dialog', 'inline'], 'dialog')}
        autoOk={boolean('Auto Ok', true)}
        cancelLabel={text('Cancel Label', 'Отмена')}
        okLabel={text('Ok Label', 'OK')}
        firstDayOfWeek={number('First Day Of Week', 1)}
        minDate={new Date(text('Min Date', '2017-01-01'))}
        maxDate={new Date(text('Max Date', '2027-12-31'))}
        locale={text('Locale', 'ru')}
        onChange={action('Change')}
        onDismiss={action('Dismiss')}
        onFocus={action('Focus')}
        onShow={action('Show')}
        onTouchTap={action('TouchTap')}
        />
    </div>
  ));
