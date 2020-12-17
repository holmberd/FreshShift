import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import WebIcon from '@material-ui/icons/Web';

import ArrowLeftIcon from '../../res/arrow-left.svg';
import ArrowRightIcon from '../../res/arrow-right.svg';
import ReloadIcon from '../../res/Reload.svg';
import SearchIcon from '../../res/search.svg';
import DotsIcon from '../../res/dots.svg';
import AddAppsIcon from '../../res/add-apps.svg';
import SlackIcon from '../../res/slack.svg';
import GmailIcon from '../../res/gmail.svg';

import classes from './demoApp.module.scss';

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroupId: 'group-1'
    }
  }

  handleSidebarGroupClick = (id) => {
    this.setState({ activeGroupId: id });
  }

  render() {
    const { activeGroupId } = this.state;

    return (
      <div className={classes.demoApp}>
        <div className={classes.topbar}>
          <ToolbarButtons/>

          <div className={classes.topbarInner}>

            <div className={classes.topbarLeft}>
              <BrowserButtons/>
              <div className={classes.tabs}></div>
              <TopbarButton className='add-tab' Icon={AddIcon} />
            </div>

            <div className={classes.topbarRight}>
              <div className={classes.staticButtons}>
                <TopbarButton className='gmail' Icon={GmailIcon} />
                <TopbarButton className='tab-manager' Icon={WebIcon} />
              </div>
            </div>

          </div>

        </div>

        <div className={classes.main}>

          <div className={classes.sidebar}>

            <div className={classes.sidebarTop}>
              <SidebarButton className='search-button' Icon={SearchIcon} />
              <Avatar
                id='group-1'
                activeGroupId={activeGroupId}
                color='aliceblue'
                imageUrl={'./will-smith.png'}
                onClick={this.handleSidebarGroupClick}
              />
              <Avatar
                id='group-2'
                activeGroupId={activeGroupId}
                color='yellow'
                imageUrl={'./carlton.png'}
                onClick={this.handleSidebarGroupClick}
              />
              <Avatar
                id='group-3'
                activeGroupId={activeGroupId}
                color='red'
                imageUrl={'./hilary.png'}
                onClick={this.handleSidebarGroupClick}
              />
              {/* <Avatar active={false} color='green' imageUrl={'./jeffrey.png'} /> */}
            </div>

            <div className={classes.sidebarBottom}>
              <SidebarButton
                className='slack-button'
                id='group-4'
                activeGroupId={activeGroupId}
                Icon={SlackIcon}
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
            <img src='./gmail.png'/>
          </div>
        </div>
      </div>
    );
  }
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

function TopbarButton({ className = '', Icon }) {
  return (
    <div className={`topbar-button ${className}`}>
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
