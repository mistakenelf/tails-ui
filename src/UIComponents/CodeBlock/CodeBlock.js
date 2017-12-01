import PropTypes from 'prop-types'
import React from 'react'

const CodeBlock = ({ children }) => (
  <pre className="bg-grey-lighter rounded border border-grey">
    <code className="font-mono">{children}</code>
  </pre>
)

CodeBlock.propTypes = {
  children: PropTypes.node
}

export default CodeBlock
