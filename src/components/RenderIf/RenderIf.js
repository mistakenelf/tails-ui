import PropTypes from 'prop-types'

const RenderIf = ({ children, condition }) => (condition ? children : null)

RenderIf.propTypes = {
  children: PropTypes.node.isRequired,
  condition: PropTypes.bool.isRequired
}

export default RenderIf
