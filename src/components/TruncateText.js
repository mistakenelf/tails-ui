import React, { PureComponent } from 'react'

export default class TruncateText extends PureComponent {
  static defaultProps = {
    wordCount: 10,
    toggleColor: 'teal'
  }

  state = {
    showMore: false
  }

  toggleShowMore = () => this.setState({ showMore: !this.state.showMore })

  render() {
    const { showMore } = this.state
    const { children, wordCount, toggleColor } = this.props

    const spliced = children
      .split(' ')
      .splice(0, wordCount)
      .join(' ')

    const truncated =
      spliced.split('').lastIndexOf(',') === spliced.length - 1
        ? spliced.slice(0, spliced.length - 1)
        : spliced

    return (
      <span className="font-sans">
        {showMore ? children : truncated}
        {children.split(' ').length > wordCount && (
          <span
            className={`text-${toggleColor} cursor-pointer`}
            onClick={() => this.toggleShowMore()}
          >
            {!showMore ? <span>...more</span> : <span>...less</span>}
          </span>
        )}
      </span>
    )
  }
}
