import PropTypes from 'prop-types'
import React from 'react'

const Modal = ({ children, title, handleClose, footer }) => (
  <div className="fixed pin flex items-center">
    <div className="fixed pin bg-black opacity-75 z-10" />
    <div className="p-4 rounded shadow-lg bg-white relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl">{title}</div>
        <button onClick={handleClose}>
          <span className="mr-2">close</span>
        </button>
      </div>
      <div>{children}</div>
      <div className="mt-4 flex justify-end">{footer}</div>
    </div>
  </div>
)

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  footer: PropTypes.node
}

export default Modal
