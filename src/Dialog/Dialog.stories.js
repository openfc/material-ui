import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import Dialog from './Dialog';
import FlatButton from '../FlatButton';
import DatePicker from '../DatePicker';
import RadioButton from '../RadioButton';

const radios = [];
for (let i = 0; i < 30; i++) {
    radios.push(
    <RadioButton
        key={i}
        value={`value${i + 1}`}
        label={`Option ${i + 1}`}          
    />
    );
}

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <Dialog
        title={text('Title', 'Dialog With Actions')}
        actions={[
            <FlatButton
                label={text('Button1 Label', 'Cancel')}
                primary={boolean('Button 1 Primary', false)}
            />,
            <FlatButton
                label={text('Button2 Label', 'Submit')}
                primary={boolean('Button 2 Primary', true)}
            />
        ]}        
        modal={boolean('Modal', false)}
        open={boolean('Open', true)}
        autoScrollBodyContent={boolean('Auto Scroll Body Content', false)}
        onRequestClose={action('RequestClose')}
    >
        {boolean('Date Picker Display', false) &&
            <DatePicker hintText='Date Picker' />
        }
        {boolean('Radio Buttons Display', false) &&
            radios
        }
        {text('Content Text', 'Bla-bla-bla...')}
    </Dialog>
  ));
