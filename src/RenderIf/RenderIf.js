import PropTypes from 'prop-types'

const RenderIf = ({ children, condition }) => (condition ? children : null)

RenderIf.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool
}

export default RenderIf
