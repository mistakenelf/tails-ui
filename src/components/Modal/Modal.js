import PropTypes from 'prop-types'
import React from 'react'

const Modal = ({ title, handleClose, children }) => (
  <div>
    <div className="fixed pin flex items-center">
      <div className="fixed pin bg-black opacity-75 z-10" />
      <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
        <div className="shadow-lg bg-white p-8">
          <div className="flex justify-end mb-6">
            <button onClick={handleClose}>
              <span className="mr-2">Close</span>
            </button>
          </div>
          <h1 className="text-center text-2xl">{title}</h1>
          <div>{children}</div>
        </div>
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node
}

export default Modal
