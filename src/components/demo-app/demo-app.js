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
            tabIds: ['7', '1'],
          },
          group1: {
            id: 'group1',
            title: 'Inbox - Carlton',
            type: 'mailbox',
            avatar: './carlton.png',
            activeTabId: 's1',
            staticTabs: ['s1'],
            tabIds: ['4', '10', '11', '14', '15', '16', '17', '18', '19'],
          },
          group2: {
            id: 'group2',
            title: 'Inbox - Hilary',
            type: 'mailbox',
            avatar: './hilary.png',
            activeTabId: 's2',
            staticTabs: ['s2'],
            tabIds: ['12', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
          },
          group3: {
            id: 'group3',
            title: 'Slack - Shift',
            type: 'app',
            Icon: SlackIcon,
            activeTabId: 's3',
            staticTabs: ['s3'],
            tabIds: ['35', '6', '13', '31', '32', '33', '34'],
          },
          group4: {
            id: 'group4',
            title: 'Slack - Redbrick',
            type: 'app',
            Icon: SlackIcon,
            activeTabId: 's3',
            staticTabs: ['s3'],
            tabIds: ['2', '3', '8', '9', '5'],
          }
        },
        tabs: {
          'start': {
            id: 'start',
            title: 'Shift - Prince of Tabs',
            url: 'https://tryshift.com'
          },
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
            title: 'will shift - Google Search',
            url: 'https://google.com'
          },
          '3': {
            id: '3',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'fresh prince of tabs - Google Search',
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
          '12': {
            id: '12',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Drive | Things and Stuff',
            url: 'https://drive.google.com'
          },
          '13': {
            id: '13',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Vivaldi',
            url: 'https://vivaldi.com'
          },
          '14': {
            id: '14',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Nineties nostalgia | Fresh prince of bel air, Fresh prince, Prince of bel air',
            url: 'https://pinterest.com'
          },
          '15': {
            id: '15',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Rainbows | Unicorns | Spaceships',
            url: 'https://pinterest.com'
          },
          '16': {
            id: '16',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Winter Forest | Snow | Mountains',
            url: 'https://pinterest.com'
          },
          '17': {
            id: '17',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Text om någonting',
            url: 'https://pinterest.com'
          },
          '18': {
            id: '18',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Best presentation ever',
            url: 'https://pinterest.com'
          },
          '19': {
            id: '19',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Critics admit defeat',
            url: 'https://pinterest.com'
          },
          '20': {
            id: '20',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Alpha - Google docs',
            url: 'https://docs.google.com'
          },
          '21': {
            id: '21',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Beta - Google docs',
            url: 'https://docs.google.com'
          },
          '22': {
            id: '22',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Gamma - Google docs',
            url: 'https://docs.google.com'
          },
          '23': {
            id: '23',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Delta - Google docs',
            url: 'https://docs.google.com'
          },
          '24': {
            id: '24',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Epsilon - Google docs',
            url: 'https://docs.google.com'
          },
          '25': {
            id: '25',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Zeta - Google docs',
            url: 'https://docs.google.com'
          },
          '26': {
            id: '26',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Eta - Google docs',
            url: 'https://docs.google.com'
          },
          '27': {
            id: '27',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Theta - Google docs',
            url: 'https://docs.google.com'
          },
          '28': {
            id: '28',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Lota - Google docs',
            url: 'https://docs.google.com'
          },
          '29': {
            id: '29',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Kappa - Google docs',
            url: 'https://docs.google.com'
          },
          '30': {
            id: '30',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Important document Lambda - Google docs',
            url: 'https://docs.google.com'
          },
          '31': {
            id: '31',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'ECMAScript 2015 (ES6) and beyond | Node.js',
            url: 'https://nodejs.org'
          },
          '32': {
            id: '32',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Index | Node.js v14.15.3 Documentation',
            url: 'https://nodejs.org'
          },
          '33': {
            id: '33',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'N-API | Node.js v14.15.3 Documentation',
            url: 'https://nodejs.org'
          },
          '34': {
            id: '34',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Crypto | Node.js v14.15.3 Documentation',
            url: 'https://nodejs.org'
          },
          '35': {
            id: '35',
            type: 'dynamic',
            imageUrl: './google.jpg',
            title: 'Download | Node.js',
            url: 'https://nodejs.org'
          },
        }
      }
    }
  }

  createTab() {
    const id = makeid(6);
    return {
      id,
      type: 'dynamic',
      imageUrl: './google.jpg',
      title: 'Google Search',
      url: 'https://google.com'
    };
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

  handleCloseTab = ({ groupId, id }) => {
    this.setState(state => {
      const activeGroupId = groupId || state.activeGroupId
      const activeGroup = state.entities.groups[activeGroupId];
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [activeGroupId]: {
              ...activeGroup,
              activeTabId: activeGroup.activeTabId == id ? activeGroup.staticTabs[0] : activeGroup.activeTabId,
              tabIds: activeGroup.tabIds.filter(tabId => tabId !== id),
            }
          },
          tabs: state.entities.tabs
        }
      }
    });
  }

  handleCloseTabs = ({ groupId, ids }) => {
    this.setState(state => {
      const activeGroup = state.entities.groups[groupId];
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [groupId]: {
              ...activeGroup,
              activeTabId: ids.includes(activeGroup.activeTabId) ? activeGroup.staticTabs[0] : activeGroup.activeTabId,
              tabIds: activeGroup.tabIds.filter(tabId => !ids.includes(tabId)),
            }
          },
          tabs: state.entities.tabs
        }
      }
    });
  }

  handleCloseAllTabs = (groupId) => {
    if (!groupId) {
      return;
    }
    this.setState(state => {
      const activeGroup = state.entities.groups[groupId];
      return {
        entities: {
          ...state.entities,
          groups: {
            ...state.entities.groups,
            [groupId]: {
              ...state.entities.groups[groupId],
              activeTabId: activeGroup.staticTabs[0],
              tabIds: []
            }
          }
        },
      }
    });
  }

  handleCreateTab = (groupId) => {
    if (!groupId) {
      return;
    }
    const newTab = this.createTab()
    this.setState(state => {
      const activeGroup = state.entities.groups[groupId];
      return {
        entities: {
          groups: {
            ...state.entities.groups,
            [groupId]: { ...activeGroup, tabIds: [...activeGroup.tabIds, newTab.id], activeTabId: newTab.id },
          },
          tabs: {
            ...state.entities.tabs,
            [newTab.id]: newTab,
          },
        }
      };
    })
  }

  handleOpenTabClick = (tabId) => {
    if (!tabId) {
      return;
    }
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

    const activeTabId = activeGroup.activeTabId;
    const activeTab = tabs[activeTabId];

    const activeGroupTabs = activeGroup.tabIds
      .map(id => tabs[id])
      .filter(tab => tab.type !== 'static')

    console.log('Welcome Earthling...');

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
                { activeGroup.type === 'mailbox' && <TopbarButton isActive={activeTab.type === 'static'} className='gmail' Icon={GmailIcon} onClick={this.handleOpenGmailClick} /> }
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
              tabIds={this.state.entities.groups[this.state.activeGroupId].tabIds}
              tabs={Object.values(this.state.entities.tabs).filter(tab => tab.type !== 'static')}
              onOpenGroup={this.handleOpenGroup}
              onOpenTab={this.handleOpenTab}
              onCloseTab={this.handleCloseTab}
              onCloseAllTabs={this.handleCloseAllTabs}
              onCreateTab={this.handleCreateTab}
              onCloseTabs={this.handleCloseTabs}
              activeGroupId={activeGroupId}
            />
            {/* {activeTabId === 'start' && <iframe frameborder="0" style={{overflow: 'hidden', height: '100%', width: '100%'}} height="100%" width="100%" src="https://docs.google.com/presentation/d/e/2PACX-1vS-BW3aZBFjJEpkWnm35i_M2bBKikGoa2i2S3UyMPiR25ZXo7OImPstPYcx9jR39UVmZbEC9oKeS1lD/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>} */}
            {activeTabId !== 'start' && <img src={activeTab.imageUrl} alt='content' />}

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
    onClose({ groupId: null, id });
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

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

