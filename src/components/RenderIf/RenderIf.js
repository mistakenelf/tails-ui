import PropTypes from 'prop-types'

const RenderIf = ({ condition, children }) => (condition ? children : null)

RenderIf.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default RenderIf
