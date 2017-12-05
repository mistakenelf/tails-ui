import PropTypes from 'prop-types'

const ShowIf = ({ children, condition }) => (condition ? children : null)

ShowIf.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool
}

export default ShowIf
