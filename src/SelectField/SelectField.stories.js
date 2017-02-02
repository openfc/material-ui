import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import SelectField from './SelectField';
import MenuItem from '../MenuItem';

storiesOf('SelectField', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
        <SelectField
            autoWidth={boolean('Auto Width', false)}
            disabled={boolean('Disabled', false)}            
            errorText={text('Error Text', '')}
            floatingLabelFixed={boolean('Floating Label Fixed', true)}
            floatingLabelText={text('Floating Label Text', 'Не тормози!')}
            fullWidth={boolean('Full Width', false)}
            hintText={text('Hint Text', 'Выберите что-нибудь что ли')}
            maxHeight={number('Max Height', null)}
            value={number('Value', null)}
            onChange={action('Change')}            
        >
            <MenuItem value={1} primaryText='Бездельник' />
            <MenuItem value={2} primaryText='Повторник' />
            <MenuItem value={3} primaryText='Бреда' />
            <MenuItem value={4} primaryText='Чёртегдерг' />
            <MenuItem value={5} primaryText='Расслабильница' />
            <MenuItem value={6} primaryText='Клуббота' />
            <MenuItem value={7} primaryText='Высплюсенье' />
        </SelectField>
    </div>
  ));
  