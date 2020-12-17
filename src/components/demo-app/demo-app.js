import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import TabSharpIcon from '@material-ui/icons/TabSharp';

import TabManager from './tab-manager';

import ArrowLeftIcon from '../../res/arrow-left.svg';
import ArrowRightIcon from '../../res/arrow-right.svg';
import ReloadIcon from '../../res/reload.svg';
import SearchIcon from '../../res/search.svg';
import DotsIcon from '../../res/dots.svg';
import AddAppsIcon from '../../res/add-apps.svg';
import SlackIcon from '../../res/slack.svg';
import GmailIcon from '../../res/gmail.svg';
import CloseTabIcon from '../../res/close-tab.svg';

import classes from './demo-app.module.scss';

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroupId: 'group0',
      activeGroupType: 'mailbox',
      entities: {
        groups: {
          group0: {
            id: 'group0',
            title: 'Will',
            type: 'mailbox',
            avatar: './will-smith.png',
            activeTabId: 's0',
            staticTabs: ['s0'],
            tabIds: ['1', '2', '3'],
          },
          group1: {
            id: 'group1',
            title: 'Carlton',
            type: 'mailbox',
            avatar: './carlton.png',
            activeTabId: 's1',
            staticTabs: ['s1'],
            tabIds: ['4'],
          },
          group2: {
            id: 'group2',
            title: 'Hilary',
            type: 'mailbox',
            avatar: './hilary.png',
            activeTabId: 's2',
            staticTabs: ['s2'],
            tabIds: ['5'],
          },
          group3: {
            id: 'group3',
            title: 'Slack - Shift',
            type: 'app',
            Icon: SlackIcon,
            activeTabId: 's3',
            staticTabs: ['s3'],
            tabIds: ['6'],
          }
        },
        tabs: {
          's0': {
            id: 's0',
            groupId: 'group0',
            type: 'static',
            imageUrl: './gmail.png',
            url: 'https://mail.google.com/mail/will'
          },
          's1': {
            id: 's1',
            groupId: 'group1',
            type: 'static',
            imageUrl: './gmail.png',
            url: 'https://mail.google.com/mail/carlton'
          },
          's2': {
            id: 's2',
            groupId: 'group2',
            type: 'static',
            imageUrl: './gmail.png',
            url: 'https://mail.google.com/mail/hilary'
          },
          's3': {
            id: 's3',
            groupId: 'group3',
            type: 'static',
            imageUrl: './gmail.png',
            url: 'https://slack.com'
          },
          '1': {
            id: '1',
            groupId: 'group0',
            type: 'dynamic',
            imageUrl: './tryshift.png',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '2': {
            id: '2',
            groupId: 'group0',
            type: 'dynamic',
            imageUrl: './google.png',
            title: 'Google',
            url: 'https://google.com'
          },
          '3': {
            id: '3',
            groupId: 'group0',
            type: 'dynamic',
            imageUrl: './google.png',
            title: 'Google',
            url: 'https://google.com'
          },
          '4': {
            id: '4',
            groupId: 'group1',
            type: 'dynamic',
            imageUrl: './tryshift.png',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '5': {
            id: '5',
            groupId: 'group2',
            type: 'dynamic',
            imageUrl: './tryshift.png',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '6': {
            id: '6',
            groupId: 'group3',
            type: 'dynamic',
            imageUrl: './tryshift.png',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
        }
      }
    }
  }

  handleSidebarGroupClick = (id) => {
    this.setState({ activeGroupId: id });
  }

  handleAddTabClick = (e) => {
    // TODO: add handler logic.
  }

  handleOpenTabClick = ({ id, groupId }) => {
    this.setState(state => {
      const activeGroup = state.entities.groups[groupId];
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [groupId]: { ...activeGroup, activeTabId: id },
          },
          tabs: { ...state.entities.tabs }
        }
      };
    })
  }

  handleOpenGmailClick = () => {
    this.setState(state => {
      const groupId = state.activeGroupId;
      const activeGroup = state.entities.groups[groupId];
      const [homeTabId] = activeGroup.staticTabs;
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [groupId]: { ...activeGroup, activeTabId: homeTabId },
          },
          tabs: { ...state.entities.tabs }
        }
      };
    })
  }

  render() {
    const { activeGroupId, entities: { groups, tabs }} = this.state;
    const activeGroup = groups[activeGroupId];

    console.log('activeGroup', activeGroup);

    const activeTabId = activeGroup.activeTabId;
    const activeTab = tabs[activeTabId];

    console.log('activeTab', activeTab);

    const activeGroupTabs = activeGroup.tabIds
      .map(id => tabs[id])
      .filter(tab => tab.type !== 'static')

    return (
      <div className={classes.demoApp}>
        <div className={classes.topbar}>
          <ToolbarButtons/>

          <div className={classes.topbarInner}>

            <div className={classes.topbarLeft}>
              <BrowserButtons/>
              <div className={classes.tabs}>
                {activeGroupTabs.map(({ id, groupId, url, title }) => (
                  <Tab
                    key={id}
                    id={id}
                    groupId={groupId}
                    url={url}
                    title={title}
                    isActive={activeTab.id === id}
                    onOpen={this.handleOpenTabClick}
                  />
                ))}
              <TopbarButton className='add-tab' Icon={AddIcon} onClick={this.handleAddTabClick}/>
              </div>
            </div>

            <div className={classes.topbarRight}>
              <div className={classes.staticButtons}>
                { activeGroup.type === 'mailbox' && <TopbarButton className='gmail' Icon={GmailIcon} onClick={this.handleOpenGmailClick} /> }
                <TopbarButton className='tab-manager' Icon={TabSharpIcon} />
              </div>
            </div>

          </div>

        </div>

        <div className={classes.main}>

          <div className={classes.sidebar}>

            <div className={classes.sidebarTop}>
              <SidebarButton className='search-button' Icon={SearchIcon} />
              <Avatar
                id={groups.group0.id}
                activeGroupId={activeGroupId}
                color='aliceblue'
                imageUrl={groups.group0.avatar}
                onClick={this.handleSidebarGroupClick}
              />
              <Avatar
                id={groups.group1.id}
                activeGroupId={activeGroupId}
                color='yellow'
                imageUrl={groups.group1.avatar}
                onClick={this.handleSidebarGroupClick}
              />
              <Avatar
                id={groups.group2.id}
                activeGroupId={activeGroupId}
                color='red'
                imageUrl={groups.group2.avatar}
                onClick={this.handleSidebarGroupClick}
              />
              {/* <Avatar active={false} color='green' imageUrl={'./jeffrey.png'} /> */}
            </div>

            <div className={classes.sidebarBottom}>
              <SidebarButton
                className='slack-button'
                id={groups.group3.id}
                activeGroupId={activeGroupId}
                Icon={groups.group3.Icon}
                onClick={this.handleSidebarGroupClick}
              >
                <div className='unread-badge'>
                  <div className='unread-badge-inner'>1</div>
                </div>
              </SidebarButton>
              <SidebarButton className='add-button' Icon={AddAppsIcon} />
              <SidebarButton className='more-button' Icon={DotsIcon} />
            </div>

          </div>

          <div className={classes.content}>
            <TabManager
              activeGroupId={activeGroupId}
              groups={Object.values(this.state.entities.groups)}
              tabs={Object.values(this.state.entities.tabs).filter(tab => tab.type !== 'static')}
            />
            <img src={activeTab.imageUrl} alt='content' />
          </div>
        </div>
      </div>
    );
  }
}

function Tab({ id, groupId, title, url, isActive, onOpen, onClose }) {
  const handleOpenTabClick = (e) => {
    e.preventDefault();
    onOpen({ id, groupId });
  }

  const handleCloseTabClick = (e) => {
    e.preventDefault();
    onClose({ id, groupId });
  }

  return (
    <div className={`${classes.tab} ${isActive ? 'active' : ''}`} onClick={handleOpenTabClick}>
      <div className={classes.tabFavicon}>
        <img src={`https://www.google.com/s2/favicons?domain_url=${url}`} />
      </div>
      <div className={classes.tabTitle}>{title}</div>
      <div className={classes.tabClose} onClick={handleCloseTabClick}>
        <IconButton>
          <SvgIcon>
            <CloseTabIcon/>
          </SvgIcon>
        </IconButton>
      </div>
    </div>
  );
}

function ToolbarButtons() {
  return (
    <div className={classes.toolbarButtons}>
      <div className={`${classes.toolbarButton} red`}></div>
      <div className={`${classes.toolbarButton} yellow`}></div>
      <div className={`${classes.toolbarButton} green`}></div>
    </div>
  );
}

function BrowserButtons() {
  return (
    <div className={classes.browserButtons}>
      <TopbarButton Icon={ArrowLeftIcon} />
      <TopbarButton Icon={ArrowRightIcon} />
      <TopbarButton Icon={ReloadIcon} />
    </div>
  );
}

function TopbarButton({ className = '', Icon, onClick }) {
  return (
    <div className={`topbar-button ${className}`} onClick={onClick}>
      <IconButton>
        <SvgIcon>
          <Icon />
        </SvgIcon>
      </IconButton>
    </div>
  );
}

function SidebarButton({ className = '', id, activeGroupId, Icon, onClick, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(id);
  }

  return (
    <div className={`sidebar-button ${className} ${activeGroupId === id ? 'active' : ''}`} onClick={handleClick}>
      <IconButton>
        <SvgIcon><Icon/></SvgIcon>
      </IconButton>
      {children}
    </div>
  );
}

function Avatar({ className = '', id, activeGroupId, imageUrl, color, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(id);
  }

  return (
    <div className={`sidebar-avatar ${className} ${activeGroupId === id ? 'active' : ''}`} onClick={handleClick}>
      <IconButton>
        <img src={imageUrl} style={{ borderColor: color }}/>
      </IconButton>
    </div>
  );
}

