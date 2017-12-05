import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export default class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.modalRoot = document.createElement('div')
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return createPortal(children, this.el)
  }
}
