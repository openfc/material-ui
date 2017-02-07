import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean, select, text } from '@kadira/storybook-addon-knobs';

import Toggle from '../Toggle';

storiesOf('Toggle', module)
    .addDecorator(withKnobs)
    .addDecorator(muiTheme())
    .add(null, () => (
        <div style={{ padding: text('Padding', '50px') }}>
            <Toggle
                disabled={boolean('Disabled', false)}
                label={text('Label', 'Вот это переключатель')}
                labelPosition={select('Label Position', ['left', 'right'], 'right')}
                onToggle={action('Toggle')}
            />
        </div>
    ));
