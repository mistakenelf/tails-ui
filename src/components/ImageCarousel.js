import React, { PureComponent } from 'react'

export default class ImageCarousel extends PureComponent {
  static defaultProps = {
    color: 'grey'
  }

  state = {
    selectedImage: 0
  }

  handleSelect = selectedImage => {
    this.setState({ selectedImage })
  }

  render() {
    const { images, color } = this.props
    const { selectedImage } = this.state
    const showNav = images && images.length > 1
    return (
      <div>
        <div
          className={`h-64 flex items-center justify-center border border-${color}-light rounded mb-8`}
        >
          {images &&
            images[selectedImage].src && (
              <img
                className="h-64 w-full p-4"
                alt={images[selectedImage].alt}
                src={images[selectedImage].src}
              />
            )}
        </div>
        {showNav && (
          <div className="flex flex-wrap justify-center">
            {images &&
              images.map((image, i) => (
                <div
                  className="h-4 justify-center p-2 mb-4 cursor-pointer"
                  key={i}
                >
                  <div
                    className="h-full flex items-center justify-center"
                    onClick={() => this.handleSelect(i)}
                  >
                    <img
                      className="h-12 w-12 rounded"
                      alt={image.alt}
                      src={image.src}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    )
  }
}
