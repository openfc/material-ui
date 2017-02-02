import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from '.';
import FlatButton from '../FlatButton';

function getStyleDisplay(boolValue) {
    return boolValue ? 'block' : 'none';
}

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (
      <Card
          onExpandChange={action('ExpandChange')}
      >
          <CardHeader
              style={{ display: getStyleDisplay(boolean('Card Header Display', true)) }}
              expandable={boolean('Card Header Expandable', false)}
              showExpandableButton={boolean('Card Header Show Expandable Button', true)}
              actAsExpander={boolean('Card Header Act As Expander', true)}
              title={text('Card Header Title', 'URL Avatar')}
              subtitle={text('Card Header Subtitle', 'Subtitle')}
              avatar={text('Card Header Avatar', 'http://lorempixel.com/100/100/nature/')}
          />
          <CardMedia
              style={{ display: getStyleDisplay(boolean('Card Media Display', true)) }}
              expandable={boolean('Card Media Expandable', true)}
              overlay={<CardTitle title={text('Overlay Title', 'Overlay title')} subtitle={text('Overlay Subtitle', 'Overlay subtitle')} />}
          >
              <img src={text('Card Media Img Src', 'http://lorempixel.com/600/337/nature/')} alt={'Sample'} />
          </CardMedia>
          <CardTitle
              style={{ display: getStyleDisplay(boolean('Card Title Display', true)) }}
              expandable={boolean('Card Title Expandable', true)}
              showExpandableButton={boolean('Card Title Show Expandable Button', false)}
              actAsExpander={boolean('Card Title Act As Expander', false)}
              title={text('Card Title', 'Card title')}
              subtitle={text('Card Subtitle', 'Card subtitle')}
          />
          <CardText
              style={{ display: getStyleDisplay(boolean('Card Text Display', true)) }}
              expandable={boolean('Card Text expandable', true)}
              actAsExpander={boolean('Card Text Act As Expander', false)}
          >
              {text('Card Text',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                  'Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.' +
                  'Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.' +
                  'Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.')}
          </CardText>
          <CardActions
              style={{ display: getStyleDisplay(boolean('Card Actions Display', true)) }}
              expandable={boolean('Card Actions expandable', true)}
              showExpandableButton={boolean('Card Actions Show Expandable Button', false)}
              actAsExpander={boolean('Card Actions Act As Expander', false)}
          >
              <FlatButton label={text('Card Actions Button1 Label', 'Action1')} />
              <FlatButton label={text('Card Actions Button2 Label', 'Action2')} />
          </CardActions>
      </Card>
  ));
