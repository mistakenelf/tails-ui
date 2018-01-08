import React from 'react'

const MegaFooter = ({
  backgroundColor,
  fontColor,
  columnOne,
  columnTwo,
  columnThree,
  columnFour,
  copyrightText
}) => (
  <div>
    <section className={`bg-${backgroundColor} py-8 w-full`}>
      <div className="container mx-auto px-8">
        <div className="table w-full">
          {columnOne && (
            <div className="block sm:table-cell">
              <p
                className={`uppercase text-${fontColor} font-bold text-md sm:mb-6`}
              >
                {columnOne.header}
              </p>
              <ul className="list-reset text-xs mb-6">
                {columnOne.links.map(link => (
                  <li
                    key={link.key}
                    className="mt-2 inline-block mr-2 sm:block sm:mr-0"
                  >
                    {React.cloneElement(link.value, {
                      className: `text-${fontColor} hover:text-grey-light`
                    })}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {columnTwo && (
            <div className="block sm:table-cell">
              <p
                className={`uppercase text-${fontColor} font-bold text-md sm:mb-6`}
              >
                {columnTwo.header}
              </p>
              <ul className="list-reset text-xs mb-6">
                {columnOne.links.map(link => (
                  <li
                    key={link.key}
                    className="mt-2 inline-block mr-2 sm:block sm:mr-0"
                  >
                    {React.cloneElement(link.value, {
                      className: `text-${fontColor} hover:text-grey-light`
                    })}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {columnThree && (
            <div className="block sm:table-cell">
              <p
                className={`uppercase text-${fontColor} font-bold text-md sm:mb-6`}
              >
                {columnThree.header}
              </p>
              <ul className="list-reset text-xs mb-6">
                {columnOne.links.map(link => (
                  <li
                    key={link.key}
                    className="mt-2 inline-block mr-2 sm:block sm:mr-0"
                  >
                    {React.cloneElement(link.value, {
                      className: `text-${fontColor} hover:text-grey-light`
                    })}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {columnFour && (
            <div className="block sm:table-cell">
              <p
                className={`uppercase text-${fontColor} font-bold text-md sm:mb-6`}
              >
                {columnFour.header}
              </p>
              <ul className="list-reset text-xs mb-6">
                {columnOne.links.map(link => (
                  <li
                    key={link.key}
                    className="mt-2 inline-block mr-2 sm:block sm:mr-0"
                  >
                    {React.cloneElement(link.value, {
                      className: `text-${fontColor} hover:text-grey-light`
                    })}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
    {copyrightText && (
      <div
        className={`bg-${backgroundColor}-dark text-xs text-center py-2 text-${fontColor}`}
      >
        {copyrightText}
      </div>
    )}
  </div>
)

MegaFooter.defaultProps = {
  backgroundColor: 'blue',
  fontColor: 'white'
}

export default MegaFooter
