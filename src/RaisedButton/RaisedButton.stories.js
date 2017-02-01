import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import RaisedButton from './RaisedButton';
import ActionAndroid from '../svg-icons/action/android';

storiesOf('RaisedButton', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <RaisedButton
            label={text('Label', 'Label')}
            primary={boolean('Primary', true)}
            secondary={boolean('Secondary', false)}
            disabled={boolean('Disabled', false)}
            fullWith={boolean('Full With', false)}
            icon={boolean('Icon', true) && <ActionAndroid />}
            labelPosition={select('Label Position', ['after', 'before'], 'after')}
            backgroundColor={text('Background Color', '')}
            disabledBackgroundColor={text('Disabled Background Color', null)}
            disabledLabelColor={text('Disabled Label Color', null)}                        
            href={text('Href', '')}
            target={text('Target', '_blank')}
        />
    </div>
  ));
