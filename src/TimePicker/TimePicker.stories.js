import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean, select, text } from '@kadira/storybook-addon-knobs';

import TimePicker from '../TimePicker';

storiesOf('TimePicker', module)
    .addDecorator(withKnobs)
    .addDecorator(muiTheme())
    .add(null, () => (
        <div style={{ padding: text('Padding', '50px') }}>
            <TimePicker
                autoOk={boolean('Auto Ok', false)}
                okLabel={text('Ok Label', 'Ok')}
                cancelLabel={text('Cancel Label', 'Отмена')}
                hintText={text('Hint Text', 'Время')}
                errorText={text('Error Text', '')}
                disabled={boolean('Disabled', false)}
                format={select('Format', ['ampm', '24hr'], '24hr')}
                pedantic={boolean('Pedantic', false)}
                onChange={action('Change')}
                onDismiss={action('Dismiss')}
                onFocus={action('Focus')}
                onShow={action('Show')}
                onTouchTap={action('TouchTap')}
            />
        </div>
    ));
