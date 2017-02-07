import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import { Tabs, Tab } from '../Tabs';
import FontIcon from '../FontIcon';

storiesOf('Tabs', module)
    .addDecorator(withKnobs)
    .addDecorator(muiTheme())
    .add(null, () => (
        <div style={{ padding: text('Padding', '50px'), width: text('Width', '') }}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <Tabs>
                <Tab
                    label={text('Tab1 Label', 'Первая')}
                    icon={<FontIcon className="material-icons">{text('Tab1 Icon Name', 'phone')}</FontIcon>}
                >
                    <div>{text('Tab1 Content', 'Test1')}</div>
                </Tab>
                <Tab
                    label={text('Tab2 Label', 'Вторая')}
                    icon={<FontIcon className="material-icons">{text('Tab2 Icon Name', 'language')}</FontIcon>}
                >
                    <div>{text('Tab2 Content', 'Test2')}</div>
                </Tab>
                <Tab
                    label={text('Tab3 Label', 'Третья')}
                    icon={<FontIcon className="material-icons">{text('Tab3 Icon Name', 'pets')}</FontIcon>}
                >
                    <div>{text('Tab3 Content', 'Test3')}</div>
                </Tab>
                <Tab
                    label={text('Tab4 Label', 'Четвёртая')}
                    icon={<FontIcon className="material-icons">{text('Tab4 Icon Name', 'shop')}</FontIcon>}
                >
                    <div>{text('Tab4 Content', 'Test4')}</div>
                </Tab>
                <Tab
                    label={text('Tab5 Label', 'Пятая')}
                    icon={<FontIcon className="material-icons">{text('Tab5 Icon Name', 'alarm')}</FontIcon>}
                >
                    <div>{text('Tab5 Content', 'Test5')}</div>
                </Tab>
            </Tabs>
        </div>
    ));
