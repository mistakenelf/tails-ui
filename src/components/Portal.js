import { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export default class Portal extends PureComponent {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }
    this.defaultNode = null
  }

  render() {
    const { domNode } = this.props

    if (!domNode && !this.defaultNode) {
      this.defaultNode = document.createElement('div')
      document.body.appendChild(this.defaultNode)
    }

    return createPortal(
      this.props.children,
      this.props.domNode || this.defaultNode
    )
  }
}
