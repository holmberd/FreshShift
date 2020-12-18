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
      isTabManagerOpen: false,
      entities: {
        groups: {
          group0: {
            id: 'group0',
            title: 'Inbox - Will',
            type: 'mailbox',
            avatar: './will-smith.png',
            activeTabId: '7',
            staticTabs: ['s0'],
            tabIds: ['7', '1', '2', '3'],
          },
          group1: {
            id: 'group1',
            title: 'Inbox - Carlton',
            type: 'mailbox',
            avatar: './carlton.png',
            activeTabId: 's1',
            staticTabs: ['s1'],
            tabIds: ['4', '8', '9', '10', '11'],
          },
          group2: {
            id: 'group2',
            title: 'Inbox - Hilary',
            type: 'mailbox',
            avatar: './hilary.png',
            activeTabId: 's2',
            staticTabs: ['s2'],
            tabIds: ['5', '7'],
          },
          group3: {
            id: 'group3',
            title: 'Slack - Shift',
            type: 'app',
            Icon: SlackIcon,
            activeTabId: 's3',
            staticTabs: ['s3'],
            tabIds: ['6', '7'],
          },
          group4: {
            id: 'group4',
            title: 'Slack - Redbrick',
            type: 'app',
            Icon: SlackIcon,
            activeTabId: 's3',
            staticTabs: ['s3'],
            tabIds: ['7', '2', '3', '8', '9', '6', '5'],
          }
        },
        tabs: {
          's0': {
            id: 's0',
            type: 'static',
            imageUrl: './gmail.jpg',
            url: 'https://mail.google.com/mail/will'
          },
          's1': {
            id: 's1',
            type: 'static',
            imageUrl: './gmail.jpg',
            url: 'https://mail.google.com/mail/carlton'
          },
          's2': {
            id: 's2',
            type: 'static',
            imageUrl: './gmail.jpg',
            url: 'https://mail.google.com/mail/hilary'
          },
          's3': {
            id: 's3',
            type: 'static',
            imageUrl: './slack.jpg',
            url: 'https://slack.com'
          },
          '1': {
            id: '1',
            type: 'dynamic',
            imageUrl: './tryshift.jpg',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '2': {
            id: '2',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Google',
            url: 'https://google.com'
          },
          '3': {
            id: '3',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Google',
            url: 'https://google.com'
          },
          '4': {
            id: '4',
            type: 'dynamic',
            imageUrl: './tryshift.jpg',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '5': {
            id: '5',
            type: 'dynamic',
            imageUrl: './tryshift.jpg',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '6': {
            id: '6',
            type: 'dynamic',
            imageUrl: './tryshift.jpg',
            title: 'The Best Way to Manage All Your Email Accounts - Shift',
            url: 'https://tryshift.com'
          },
          '7': {
            id: '7',
            type: 'dynamic',
            imageUrl: './freshprincestore.jpg',
            title: 'Fresh Prince Store',
            url: 'https://freshprincestore.com/'
          },
          '8': {
            id: '8',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'redbrickmedia/inboxy: Shift productivity application',
            url: 'https://github.com'
          },
          '9': {
            id: '9',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'redbrickmedia/shift-apis: Repo for everything related to the api endpoints',
            url: 'https://github.com'
          },
          '10': {
            id: '10',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Mixpanel | Product Analytics',
            url: 'https://mixpanel.com'
          },
          '11': {
            id: '11',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Shift | Grow',
            url: 'https://app.gogrow.com'
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

  handleOpenGroup = (groupId) => {
    this.setState({ activeGroupId: groupId });
  }

  handleOpenTab = ({ id, groupId }) => {
    this.setState(state => {
      const activeGroup = state.entities.groups[groupId];
      return {
        activeGroupId: groupId,
        entities: {
          groups: {
            ...state.entities.groups,
            [groupId]: { ...activeGroup, activeTabId: id },
          },
          tabs: state.entities.tabs
        }
      };
    })
  }

  handleCloseTab = (tabId) => {
    this.setState(state => {
      const activeGroupId = state.activeGroupId
      const activeGroup = state.entities.groups[activeGroupId];
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [activeGroupId]: {
              ...activeGroup,
              activeTabId: activeGroup.activeTabId == tabId ? activeGroup.staticTabs[0] : activeGroup.activeTabId,
              tabIds: activeGroup.tabIds.filter(id => id !== tabId),
            }
          },
          tabs: state.entities.tabs
        }
      }
    });
  }

  handleOpenTabClick = (tabId) => {
    this.setState(state => {
      const activeGroup = state.entities.groups[state.activeGroupId];
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [activeGroup.id]: { ...activeGroup, activeTabId: tabId },
          },
          tabs: state.entities.tabs
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

  handleToggleTabManager = () => {
    this.setState(state => ({ isTabManagerOpen: !state.isTabManagerOpen }));
  }

  render() {
    const { isTabManagerOpen, activeGroupId, entities: { groups, tabs }} = this.state;
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
                    onClose={this.handleCloseTab}
                  />
                ))}
              <TopbarButton className='add-tab' Icon={AddIcon} onClick={this.handleAddTabClick}/>
              </div>
            </div>

            <div className={classes.topbarRight}>
              <div className={classes.staticButtons}>
                { activeGroup.type === 'mailbox' && <TopbarButton className='gmail' Icon={GmailIcon} onClick={this.handleOpenGmailClick} /> }
                <TopbarButton
                  className='tab-manager'
                  Icon={TabSharpIcon}
                  onClick={this.handleToggleTabManager}
                  isActive={isTabManagerOpen}
                />
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
              <SidebarButton
                className='slack-button-2'
                id={groups.group4.id}
                activeGroupId={activeGroupId}
                Icon={groups.group4.Icon}
                onClick={this.handleSidebarGroupClick}
              >
                <div className='unread-badge'>
                  <div className='unread-badge-inner'>3</div>
                </div>
              </SidebarButton>
              <SidebarButton className='add-button' Icon={AddAppsIcon} />
              <SidebarButton className='more-button' Icon={DotsIcon} />
            </div>

          </div>

          <div className={classes.content}>
            <TabManager
              isOpen={isTabManagerOpen}
              groups={Object.values(this.state.entities.groups)}
              tabs={Object.values(this.state.entities.tabs).filter(tab => tab.type !== 'static')}
              onOpenGroup={this.handleOpenGroup}
              onOpenTab={this.handleOpenTab}
              onCloseTab={this.handleCloseTab}
            />
            <img src={activeTab.imageUrl} alt='content' />
          </div>
        </div>
      </div>
    );
  }
}

function Tab({ id, title, url, isActive, onOpen, onClose }) {
  const handleOpenTabClick = (e) => {
    e.preventDefault();
    onOpen(id);
  }

  const handleCloseTabClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(id);
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

function TopbarButton({ className = '', isActive, Icon, onClick }) {
  return (
    <div className={`topbar-button ${className} ${isActive ? 'active' : ''}`} onClick={onClick}>
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
    <div className={`sidebar-button ${className} ${id && activeGroupId === id ? 'active' : ''}`} onClick={handleClick}>
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

