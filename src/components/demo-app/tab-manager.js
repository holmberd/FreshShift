import React from 'react';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    this.focusSearchInput()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      return this.focusSearchInput()
    }
  }

  focusSearchInput() {
    console.log('s', this.searchInputRef);
    if (this.searchInputRef && this.searchInputRef.current) {
      this.searchInputRef.current.focus()
    }
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

  handleGroupClick = (groupId) => {
    this.props.onOpenGroup(groupId);
  }

  handleTabClick = (res) => {
    this.props.onOpenTab(res);
  }

  handleCloseTab = (tabId) => {
    this.props.onCloseTab(tabId);
  }

  render() {
    const { isOpen, groups, tabs } = this.props;
    const { visibleTabIds, isSearching } = this.state;

    const visibleTabs = tabs.filter(tab => visibleTabIds.includes(tab.id));

    console.log('visibleTabs', visibleTabs);

    const visibleGroups = isSearching ? groups
      .filter(group => group.tabIds.some(tabId => visibleTabIds.includes(tabId))) : groups;

    const defaultExpanded = groups
      .filter(group => group.tabIds.length)
      .map(group => group.id)

    return !isOpen ? null : (
      <div className={classes.tabManager}>
        <div className={classes.tabManagerSearch}>
          <Input
            inputRef={this.searchInputRef}
            className={classes.tabSearch}
            type='search'
            placeholder='Search...'
            onChange={event => this.handleSearchFilterChange(event.target.value.toLowerCase())}
          />
        </div>
        <div className={classes.tabManagerTree}>
          <TreeView
            className={classes.treeViewRoot}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            defaultExpanded={defaultExpanded}
            multiSelect
          >
            {visibleGroups.map(group => (
              <TreeItem
                className={classes.groupTreeItemRoot}
                key={group.id}
                nodeId={group.id}
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>{ group.avatar
                      ? <TreeParentIcon src={group.avatar} />
                      : <SvgIcon style={{ fontSize: 18 }}><group.Icon /></SvgIcon>
                    }</div>
                    <div style={{ marginLeft: 10, display: 'flex', justifyContent: 'space-between', flexGrow: 1, userSelect: 'none' }}>
                      <div>
                        {`${group.title}`}
                        <span style={{ color: 'gray' }}>{` (${group.tabIds.length})`}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <Tooltip title='Create tab' aria-label='create tab'>
                          <div>
                            <IconButton size='small'>
                              <AddIcon fontSize='inherit' style={{ color: '#8f93a3' }}/>
                            </IconButton>
                          </div>
                        </Tooltip>
                        <Tooltip title='Close tabs' aria-label='close selected'>
                          <div>
                            <IconButton size='small'>
                              <DeleteOutlineIcon fontSize='inherit' style={{ color: '#8f93a3' }}/>
                            </IconButton>
                          </div>
                        </Tooltip>
                        <Tooltip title='More...' aria-label='more'>
                          <div>
                            <IconButton size='small'>
                              <MoreVertIcon fontSize='inherit' style={{ color: '#8f93a3' }}/>
                            </IconButton>
                          </div>
                        </Tooltip>
                      </div>

                      {/* {Boolean(group.tabIds.length) && <div style={{ color: 'gray' }}>{group.tabIds.length}</div> } */}
                    </div>
                  </div>
                }
                onLabelClick={(e) => { e.preventDefault(); this.handleGroupClick(group.id)}}
              >
                <TreeTabs
                  groupId={group.id}
                  tabs={visibleTabs}
                  tabIds={group.tabIds}
                  onLabelClick={this.handleTabClick}
                  onCloseTab={this.handleCloseTab}
                />
              </TreeItem>
            ))}
          </TreeView>
        </div>
      </div>
    );
  }
}

function TreeTabs({ groupId, tabIds, tabs, onLabelClick, onCloseTab }) {
  const childrenTabs = tabIds
    .map(tabId => tabs.find(tab => tab.id === tabId))
    .filter(Boolean);

  return (
    <>
      { childrenTabs.map(tab => (
        <TreeItem
          key={tab.id}
          className={classes.tabTreeItemRoot}
          nodeId={tab.id}
          label={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='child-label-title'>{tab.title}</div>
              <div
                className={classes.closeTabButton}
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(tab.id)
                }}
              >
                <IconButton style={{ padding: 4 }}>
                  <SvgIcon style={{ fontSize: 10 }}><CloseTabIcon/></SvgIcon>
                </IconButton>
              </div>
            </div>
          }
          icon={<TreeTabIcon url={tab.url} />}
          onLabelClick={(e) => onLabelClick({ id: tab.id, groupId })}
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
