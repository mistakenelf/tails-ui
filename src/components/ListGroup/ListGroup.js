import PropTypes from 'prop-types'
import React from 'react'

const ListGroup = ({ list }) => (
  <div className="font-sans">
    <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg leading-normal">
      {list.map((list, index) => (
        <a
          key={index}
          href="#"
          className="block group hover:bg-blue p-4 border-b no-underline"
        >
          <p className="font-bold text-lg mb-1 text-black group-hover:text-white">
            {list.title}
          </p>
          <p className="text-grey-darker mb-2 group-hover:text-white">
            {list.description}
          </p>
        </a>
      ))}
    </div>
  </div>
)

ListGroup.propTypes = {
  list: PropTypes.array
}

export default ListGroup
