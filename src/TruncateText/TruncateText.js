import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

export default class TruncateText extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    wordCount: PropTypes.number
  }

  static defaultProps = {
    wordCount: 10
  }

  state = {
    showMore: false
  }

  toggleShowMore = () => this.setState({ showMore: !this.state.showMore })

  render() {
    const { showMore } = this.state
    const { children, wordCount } = this.props

    const spliced = children
      .split(' ')
      .splice(0, wordCount)
      .join(' ')

    const truncated =
      spliced.split('').lastIndexOf(',') === spliced.length - 1
        ? spliced.slice(0, spliced.length - 1)
        : spliced

    return (
      <span>
        {showMore ? children : truncated}
        {children.split(' ').length > wordCount && (
          <span onClick={() => this.toggleShowMore()}>
            {!showMore ? <span>...more</span> : <span>...less</span>}
          </span>
        )}
      </span>
    )
  }
}
