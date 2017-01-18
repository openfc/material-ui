import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs'

import AutoComplete from './AutoComplete';

function getAutoCompleteFilter(filterName) {
  switch (filterName) {
    case 'noFilter':
      return AutoComplete.noFilter;
    case 'defaultFilter':
      return AutoComplete.defaultFilter;
    case 'caseInsensitiveFilter':
      return AutoComplete.caseInsensitiveFilter;
    case 'fuzzyFilter':
      return AutoComplete.fuzzyFilter;
    default:
      return AutoComplete.defaultFilter
  }
}

storiesOf('AutoComplete', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div style={{'padding': text('Padding', '50px')}}>
      <AutoComplete  
        disabled={boolean('Disabled', false)}
        open={boolean('Open', false)}
        openOnFocus={boolean('Open On Focus', true)}
        fullWidth={boolean('Full Width', true)}
        animated={boolean('Animated', true)}
        disableFocusRipple={boolean('Disable Focus Ripple', true)}
        hintText={text('Hint Text', 'День недели')}
        floatingLabelText='Выберите или введите наименование дня недели'
        errorText={text('Error Text', '')}
        searchText={text('Search Text', '')}
        dataSource={array('Data Source', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'])}
        filter={getAutoCompleteFilter(select('Filter', ['noFilter', 'defaultFilter', 'caseInsensitiveFilter', 'fuzzyFilter'], 'caseInsensitiveFilter'))}
        maxSearchResults={number('Max Search Results', 7)}
        menuCloseDelay={number('Menu Close Delay', 300)}
        onBlur={action('Blur')}
        onFocus={action('Focus')}
        onKeyDown={action('KeyDown')}
        onNewRequest={action('NewRequest')}
        onUpdateInput={action('UpdateInput')}
      />
    </div>
  ));
