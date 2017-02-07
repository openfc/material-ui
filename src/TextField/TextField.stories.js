import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean, number, select, text } from '@kadira/storybook-addon-knobs';

import TextField from '../TextField';

storiesOf('TextField', module)
    .addDecorator(withKnobs)
    .addDecorator(muiTheme())
    .add(null, () => (
        <div style={{ padding: text('Padding', '50px'), width: text('Width', '') }}>
            <TextField
                disabled={boolean('Disabled', false)}
                errorText={text('Error Text', '')}
                floatingLabelFixed={boolean('Floating Label Fixed', false)}
                floatingLabelText={text('Floating Label Text', 'Это текстовое поле')}
                fullWidth={boolean('Full Width', false)}
                hintText={text('Hint Text', 'Введите что-нибудь')}
                multiLine={boolean('Multi Line', false)}
                rows={number('Rows', 1)}
                rowsMax={number('Rows Max', null)}
                type={select('Type', ['text', 'password'], 'text')}
                underlineShow={boolean('Underline Show', true)}
                onChange={action('Change')}
            />
        </div>
    ));
