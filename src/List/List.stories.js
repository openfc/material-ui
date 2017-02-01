import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, array, number, select } from '@kadira/storybook-addon-knobs';

import List from './List';
import ListItem from './ListItem';
import Avatar from '../Avatar';
import Divider from '../Divider';
import Subheader from '../Subheader';
import Checkbox from '../Checkbox';
import Toggle from '../Toggle';
import IconMenu from '../IconMenu';
import MenuItem from '../MenuItem';
import IconButton from '../IconButton';

import ContentInbox from '../svg-icons/content/inbox';
import ActionGrade from '../svg-icons/action/grade';
import ContentSend from '../svg-icons/content/send';
import ContentDrafts from '../svg-icons/content/drafts';
import ActionInfo from '../svg-icons/action/info';
import CommunicationChatBubble from '../svg-icons/communication/chat-bubble';
import FileFolder from '../svg-icons/file/folder';
import ActionAssignment from '../svg-icons/action/assignment';
import EditorInsertChart from '../svg-icons/editor/insert-chart';
import CommunicationCall from '../svg-icons/communication/call';
import CommunicationEmail from '../svg-icons/communication/email';
import MoreVertIcon from '../svg-icons/navigation/more-vert';

import {pinkA200, transparent, blue500, yellow600, indigo500, grey400, darkBlack} from '../styles/colors';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip='more'
    tooltipPosition='bottom-left'
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('Simple', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '300px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <ListItem primaryText='Inbox' leftIcon={<ContentInbox />} />
            <ListItem primaryText='Starred' leftIcon={<ActionGrade />} />
            <ListItem primaryText='Sent mail' leftIcon={<ContentSend />} />
            <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
            <ListItem primaryText='Inbox' leftIcon={<ContentInbox />} />
            <Divider/>
            <ListItem primaryText='All mail' rightIcon={<ActionInfo />} />
            <ListItem primaryText='Trash' rightIcon={<ActionInfo />} />
            <ListItem primaryText='Spam' rightIcon={<ActionInfo />} />
            <ListItem primaryText='Follow up' rightIcon={<ActionInfo />} />
        </List>
    </div>
  ))
  .add('Chat list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '300px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <Subheader>Recent chats</Subheader>
            <ListItem
                primaryText='Brendan Lim'
                leftAvatar={<Avatar src='images/avatars/ok-128.jpg' />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText='Eric Hoffman'
                leftAvatar={<Avatar src='images/avatars/kolage-128.jpg' />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText='Grace Ng'
                leftAvatar={<Avatar src='images/avatars/uxceo-128.jpg' />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText='Kerem Suer'
                leftAvatar={<Avatar src='images/avatars/kerem-128.jpg' />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText='Raquel Parrado'
                leftAvatar={<Avatar src='images/avatars/raquelromanp-128.jpg' />}
                rightIcon={<CommunicationChatBubble />}
            />
        </List>
        <Divider />
        <List>
            <Subheader>Previous chats</Subheader>
            <ListItem
                primaryText='Chelsea Otakan'
                leftAvatar={<Avatar src='images/avatars/chexee-128.jpg' />}
            />
            <ListItem
                primaryText='James Anderson'
                leftAvatar={<Avatar src='images/avatars/jsa-128.jpg' />}
            />
        </List>
    </div>
  ))
  .add('Contacts list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '300px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <ListItem
                primaryText='Chelsea Otakan'
                leftIcon={<ActionGrade color={pinkA200} />}
                rightAvatar={<Avatar src='images/avatars/chexee-128.jpg' />}
            />
            <ListItem
                primaryText='Eric Hoffman'
                insetChildren={true}
                rightAvatar={<Avatar src='images/avatars/kolage-128.jpg' />}
            />
            <ListItem
                primaryText='James Anderson'
                insetChildren={true}
                rightAvatar={<Avatar src='images/avatars/jsa-128.jpg' />}
            />
            <ListItem
                primaryText='Kerem Suer'
                insetChildren={true}
                rightAvatar={<Avatar src='images/avatars/kerem-128.jpg' />}
            />
        </List>
        <Divider inset={true} />
        <List>
            <ListItem
                primaryText='Adelle Charles'
                leftAvatar={
                <Avatar
                    color={pinkA200} backgroundColor={transparent}
                    style={{left: 8}}
                >
                    A
                </Avatar>
                }
                rightAvatar={<Avatar src='images/avatars/adellecharles-128.jpg' />}
            />
            <ListItem
                primaryText='Adham Dannaway'
                insetChildren={true}
                rightAvatar={<Avatar src='images/avatars/adhamdannaway-128.jpg' />}
            />
            <ListItem
                primaryText='Allison Grayce'
                insetChildren={true}
                rightAvatar={<Avatar src='images/avatars/allisongrayce-128.jpg' />}
            />
            <ListItem
                primaryText='Angel Ceballos'
                insetChildren={true}
                rightAvatar={<Avatar src='images/avatars/angelceballos-128.jpg' />}
            />
        </List>
    </div>
  ))
  .add('Folder list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '300px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <Subheader inset={true}>Folders</Subheader>
            <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText='Photos'
                secondaryText='Jan 9, 2014'
            />
            <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText='Recipes'
                secondaryText='Jan 17, 2014'
            />
            <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText='Work'
                secondaryText='Jan 28, 2014'
            />
        </List>
        <Divider inset={true} />
        <List>
            <Subheader inset={true}>Files</Subheader>
            <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<ActionInfo />}
                primaryText='Vacation itinerary'
                secondaryText='Jan 20, 2014'
            />
            <ListItem
                leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                rightIcon={<ActionInfo />}
                primaryText='Kitchen remodel'
                secondaryText='Jan 10, 2014'
            />
        </List>
    </div>
  ))
  .add('Nested list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '300px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <Subheader>Nested List Items</Subheader>
            <ListItem primaryText='Sent mail' leftIcon={<ContentSend />} />
            <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
            <ListItem
              primaryText='Inbox'
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText='Starred'
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText='Sent Mail'
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText='Inbox'
                  leftIcon={<ContentInbox />}
                  nestedItems={[
                    <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
        </List>
    </div>
  ))
  .add('Settings list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '300px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <Subheader>General</Subheader>
            <ListItem
                primaryText='Profile photo'
                secondaryText='Change your Google+ profile photo'
            />
            <ListItem
                primaryText='Show your status'
                secondaryText='Your status is visible to everyone you use with'
            />
        </List>
        <Divider />
        <List>
            <Subheader>Hangout Notifications</Subheader>
            <ListItem
                leftCheckbox={<Checkbox />}
                primaryText='Notifications'
                secondaryText='Allow notifications'
            />
            <ListItem
                leftCheckbox={<Checkbox />}
                primaryText='Sounds'
                secondaryText='Hangouts message'
            />
            <ListItem
                leftCheckbox={<Checkbox />}
                primaryText='Video sounds'
                secondaryText='Hangouts video call'
            />
        </List>
        <Divider/>
        <List>
            <ListItem
                primaryText='When calls and notifications arrive'
                secondaryText='Always interrupt'
            />
        </List>
        <Divider />
        <List>
            <Subheader>Priority Interruptions</Subheader>
            <ListItem primaryText='Events and reminders' rightToggle={<Toggle />} />
            <ListItem primaryText='Calls' rightToggle={<Toggle />} />
            <ListItem primaryText='Messages' rightToggle={<Toggle />} />
        </List>
        <Divider />
        <List>
            <Subheader>Hangout Notifications</Subheader>
            <ListItem primaryText='Notifications' leftCheckbox={<Checkbox />} />
            <ListItem primaryText='Sounds' leftCheckbox={<Checkbox />} />
            <ListItem primaryText='Video sounds' leftCheckbox={<Checkbox />} />
        </List>
    </div>
  ))
  .add('Phone list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '400px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <ListItem
                leftIcon={<CommunicationCall color={indigo500} />}
                rightIcon={<CommunicationChatBubble />}
                primaryText='(650) 555 - 1234'
                secondaryText='Mobile'
            />
            <ListItem
                insetChildren={true}
                rightIcon={<CommunicationChatBubble />}
                primaryText='(323) 555 - 6789'
                secondaryText='Work'
            />
            </List>
            <Divider inset={true} />
            <List>
            <ListItem
                leftIcon={<CommunicationEmail color={indigo500} />}
                primaryText='aliconnors@example.com'
                secondaryText='Personal'
            />
            <ListItem
                insetChildren={true}
                primaryText='ali_connors@example.com'
                secondaryText='Work'
            />
        </List>
    </div>
  ))
  .add('Messages list', () => (
    <div style={{'margin': text('Margin', '50px'), width: text('Width', '400px'), border: text('Border', '1px solid #D9D9D9')}}>
        <List>
            <Subheader>Today</Subheader>
            <ListItem
                leftAvatar={<Avatar src='images/avatars/ok-128.jpg' />}
                rightIconButton={rightIconMenu}
                primaryText='Brendan Lim'
                secondaryText={
                    <p>
                    <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                leftAvatar={<Avatar src='images/avatars/kolage-128.jpg' />}
                rightIconButton={rightIconMenu}
                primaryText='me, Scott, Jennifer'
                secondaryText={
                    <p>
                    <span style={{color: darkBlack}}>Summer BBQ</span><br />
                    Wish I could come, but I&apos;m out of town this weekend.
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                leftAvatar={<Avatar src='images/avatars/uxceo-128.jpg' />}
                rightIconButton={rightIconMenu}
                primaryText='Grace Ng'
                secondaryText={
                    <p>
                    <span style={{color: darkBlack}}>Oui oui</span><br />
                    Do you have any Paris recs? Have you ever been?
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                leftAvatar={<Avatar src='images/avatars/kerem-128.jpg' />}
                rightIconButton={rightIconMenu}
                primaryText='Kerem Suer'
                secondaryText={
                    <p>
                    <span style={{color: darkBlack}}>Birthday gift</span><br />
                    Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                leftAvatar={<Avatar src='images/avatars/raquelromanp-128.jpg' />}
                rightIconButton={rightIconMenu}
                primaryText='Raquel Parrado'
                secondaryText={
                    <p>
                    <span style={{color: darkBlack}}>Recipe to try</span><br />
                    We should eat this: grated squash. Corn and tomatillo tacos.
                    </p>
                }
                secondaryTextLines={2}
            />
        </List>
    </div>
  ));
