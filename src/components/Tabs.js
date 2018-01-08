import React, { PureComponent } from 'react'

export default class Tabs extends PureComponent {
  static defaultProps = {
    position: 'start'
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
    const { position } = this.props
    return (
      <React.Fragment>
        <ul className={`list-reset flex justify-${position}`}>
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <div>{this.renderActiveTabContent()}</div>
      </React.Fragment>
    )
  }
}
