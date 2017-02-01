import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import RefreshIndicator from './RefreshIndicator';

storiesOf('RefreshIndicator', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
    <div>
        <RefreshIndicator
            color={text('Color', null)}
            loadingColor={text('Loading Color', null)}
            percentage={number('Percentage', 50)}
            size={number('Size', 40)}
            status={select('Status', ['ready', 'loading', 'hide'], 'loading')}
            style={{width: number('Width', null)}}
            left={number('Left', 100)}
            top={number('Top', 50)}
        />
    </div>
  ));
