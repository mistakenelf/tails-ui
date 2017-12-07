import PropTypes from 'prop-types'
import React from 'react'

const Article = ({ title, author, description, abstract, footer }) => (
  <div className="w-full">
    <h1 className="font-sans font-thin mb-4">{title}</h1>
    <p className="text-grey mb-3">{author}</p>
    <h2 className="font-sans font-thin leading-normal mb-4">{description}</h2>
    <p className="text-grey-darkest mb-6 leading-tight">{abstract}</p>
    <div>
      {React.cloneElement(footer, {
        className: 'text-black no-underline'
      })}
    </div>
  </div>
)

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  abstract: PropTypes.string,
  footer: PropTypes.node
}

export default Article
