import React from 'react';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

import Input from '../input';

import CloseTabIcon from '../../res/close-tab.svg';

import classes from './tab-manager.module.scss';

export default class TabManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleTabIds: props.tabs.map(tab => tab.id),
      isSearching: false,
    };
  }

  isTabVisible(searchFilter, { url, title }) {
    const query = searchFilter.trim();
    if (!query) {
      return true;
    }
    const partialQueryExpr = query
      .split(' ')
      .filter(Boolean)
      .map((s) => new RegExp(s, 'i'));
    const urlStr = url.split('://').length ? url.split('://')[1] : '';
    const tabStr = title + urlStr;
    return partialQueryExpr.every((q) => q.test(tabStr));
  }

  handleSearchFilterChange = (value) => {
    if (!value || value.trim() === '') {
      return this.setState({ visibleTabIds: this.props.tabs.map(tab => tab.id), isSearching: false })
    }
    const visibleTabs = this.props.tabs.filter(tab => this.isTabVisible(value, { url: tab.url, title: tab.title }));
    this.setState({ visibleTabIds: visibleTabs.map(tab => tab.id ), isSearching: true });
  }

  handleParentClick = (groupId) => {
    console.log('groupId', groupId);
  }

  handleChildClick = (tabId) => {
    // this.props.openTab(tabId);
    console.log('tabId', tabId);
  }

  render() {
    const { activeGroupId, groups, tabs } = this.props;
    const { visibleTabIds, isSearching } = this.state;

    console.log('visibleTabIds', visibleTabIds);

    const visibleTabs = tabs.filter(tab => visibleTabIds.includes(tab.id));
    const visibleGroups = isSearching ? groups
      .filter(group => group.tabIds.some(tabId => visibleTabIds.includes(tabId))) : groups;

    const defaultExpanded = groups
      .filter(group => group.tabIds.length)
      .map(group => group.id)

    return (
      <div className={classes.tabManager}>
        <div className={classes.tabManagerSearch}>
          <Input
            className={classes.tabSearch}
            type='search'
            placeholder='Search...'
            onChange={event => this.handleSearchFilterChange(event.target.value.toLowerCase())}
          />
        </div>
        <div className={classes.tabManagerTree}>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            defaultExpanded={defaultExpanded}
            multiSelect
          >
            {visibleGroups.map(group => (
              <TreeItem
                key={group.id}
                nodeId={group.id}
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>{ group.avatar
                      ? <TreeParentIcon src={group.avatar} />
                      : <SvgIcon style={{ fontSize: 18 }}><group.Icon /></SvgIcon>
                    }</div>
                    <div style={{ marginLeft: 6, display: 'flex', justifyContent: 'space-between' }}>
                      <div>{group.type === 'mailbox' ? `Inbox - ${group.title}` : `${group.title}`}</div>
                      {Boolean(group.tabIds.length) && <div>{group.tabIds.length}</div> }
                    </div>
                  </div>
                }
                onLabelClick={(e) => { e.preventDefault(); this.handleParentClick(group.id)}}
              >
                <TreeTabs tabs={visibleTabs} tabIds={group.tabIds} onLabelClick={this.handleChildClick}/>
              </TreeItem>
            ))}
          </TreeView>
        </div>
      </div>
    );
  }
}

function TreeTabs({ tabIds, tabs, onLabelClick }) {
  const childrenTabs = tabs.filter(tab => tabIds.includes(tab.id));
  return (
    <>
      { childrenTabs.map(tab => (
        <TreeItem
          key={tab.id}
          nodeId={tab.id}
          label={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='child-label-title'>{tab.title}</div>
              <div style={{ display: 'flex' }}>
                <IconButton style={{ padding: 2 }}>
                  <SvgIcon style={{ fontSize: 10 }}><CloseTabIcon/></SvgIcon>
                </IconButton>
              </div>
            </div>
          }
          icon={<TreeTabIcon url={tab.url} />}
          onLabelClick={(e) => onLabelClick(tab.id)}
        />
      ))}
    </>
  );
};

function TreeTabIcon({ url }) {
  return (
    <img src={`https://www.google.com/s2/favicons?domain_url=${url}`} />
  )
}

function TreeParentIcon({ src }) {
  return (
    <img src={src} style={{ width: 20, height: 20, borderRadius: '50%' }} />
  )
};
