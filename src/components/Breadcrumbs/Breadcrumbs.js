import PropTypes from 'prop-types'
import React from 'react'

const Breadcrumbs = ({ crumbs, bgColor, textColor }) => (
  <nav className={`${bgColor} p-3 rounded font-sans w-full m-4`}>
    <ol className="list-reset flex text-grey-dark">
      {crumbs.map(crumb => (
        <span key={crumb.key} className="flex">
          <li>
            {React.cloneElement(crumb.value, {
              className: `${textColor} font-bold`
            })}
          </li>
          {crumb.hasSeparator && (
            <li>
              <span className="mx-2">/</span>
            </li>
          )}
        </span>
      ))}
    </ol>
  </nav>
)

Breadcrumbs.defaultProps = {
  bgColor: 'bg-grey-light',
  textColor: 'text-blue'
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Breadcrumbs
