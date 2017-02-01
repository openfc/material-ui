import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import Popover from './Popover';
import PopoverAnimationVertical from './PopoverAnimationVertical'
import RaisedButton from '../RaisedButton';
import Menu from '../Menu';
import MenuItem from '../MenuItem';

class PopoverExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    action('RequestClose');
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div style={{'padding': text('Padding', '150px 0px 0px 200px')}}>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label={text('Raised Button Label', 'Click me')}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            horizontal: select('Anchor Origin Horizontal', ['left', 'middle', 'right'], 'left'),
            vertical: select('Anchor Origin Vertical', ['top', 'center', 'bottom'], 'bottom'),
          }}
          targetOrigin={{
            horizontal: select('Target Origin Horizontal', ['left', 'middle', 'right'], 'left'),
            vertical: select('Target Origin Vertical', ['top', 'center', 'bottom'], 'bottom'),
          }}
          canAutoPosition={boolean('Can Auto Position', true)}
          onRequestClose={this.handleRequestClose}
          animated={boolean('Animated', true)}
          animation={boolean('Vertical Animation', false) && PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText='Refresh' />
            <MenuItem primaryText='Help &amp; feedback' />
            <MenuItem primaryText='Settings' />
            <MenuItem primaryText='Sign out' />
          </Menu>
        </Popover>
      </div>
    );
  }
}

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add(null, () => (        
    <PopoverExample />
  ));