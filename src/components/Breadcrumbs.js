import React from 'react'

const Breadcrumbs = ({ bgColor, crumbs, textColor }) => (
  <nav className={`${bgColor} p-3 rounded font-sans w-full`}>
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

export default Breadcrumbs
