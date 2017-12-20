import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

export default class Tabs extends PureComponent {
  static propTypes = {
    defaultActiveTabIndex: PropTypes.number,
    children: PropTypes.node
  }
  state = {
    activeTabIndex: this.props.defaultActiveTabIndex
  }

  handleTabClick = tabIndex => {
    this.setState({
      activeTabIndex: tabIndex
    })
  }

  renderChildrenWithTabsApiAsProps = () => {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      })
    })
  }

  renderActiveTabContent = () => {
    const { children } = this.props
    const { activeTabIndex } = this.state
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul className="list-reset flex justify-center">
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <div>{this.renderActiveTabContent()}</div>
      </React.Fragment>
    )
  }
}
