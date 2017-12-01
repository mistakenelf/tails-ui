import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

export default class Icon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    color: PropTypes.string
  }

  static defaultProps = {
    size: 24
  }

  mergeStyles = (...args) => {
    return Object.assign({}, ...args)
  }

  renderGraphic = () => {
    switch (this.props.icon) {
      case 'book':
        return (
          <g>
            <path d="M18 2h-12c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-12 2h5v8l-2.5-1.5-2.5 1.5v-8z" />
          </g>
        )
    }
  }

  render() {
    let styles = {
      fill: this.props.color || 'black',
      verticalAlign: 'middle',
      width: this.props.size,
      height: this.props.size
    }

    return (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        style={this.mergeStyles(styles, this.props.style)}
      >
        {this.renderGraphic()}
      </svg>
    )
  }
}
