/* eslint-disable */
import React from 'react';

import './Carousel.scss';

class Carousel extends React.Component {
  state = {
    location: 0,
    gap: 40,
    itemWidth: 130,
    frameSize: 3,
    step: 1,
    animationDuration: 1000,
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]:type === "checkbox" ? checked : value,
    })
  }

  slideRight = () => {
    this.setState(state => ({
      location: state.location + ((state.itemWidth * state.step) + (state.gap * state.step))
    }))
  }

  slideLeft = () => {
    this.setState(state => ({
      location: state.location - ((state.itemWidth * state.step) + (state.gap * state.step))
    }))
  }

  render() {
    const { images } = this.props;
    const { location, itemWidth, frameSize, step, animationDuration, gap, infinite } = this.state;
    return (
      <div className="Carousel">
        <div
          className="Carousel__smiles-wrapper"
          style={{ width: `${itemWidth * frameSize + gap * frameSize}px` }}
        >
          <div
            className="Carousel__wrapper"
            style={{ right: `${location}px`, transitionDuration: `${animationDuration}ms`, }}
          >

            <ul className="Carousel__list">
              {images.map((image, i) => (
                <li key={i} className="Carousel__item">
                  <img
                    src={image}
                    alt={i}
                    width={itemWidth} />
                </li>
              ))}
            </ul>

          </div>
        </div>

        <section className="Carousel__buttons">
          <button
            type="button"
            onClick={this.slideLeft}
            disabled={location <= 0}
          >
            <img
              src="https://svgsilh.com/svg/25832.svg"
              width="50px"
              style={{ transform: 'rotate(180deg)'}}
            ></img>
          </button>

          <button
            type="button"
            onClick={this.slideRight}
            disabled={location >= (itemWidth * (images.length - frameSize)) + (gap * (images.length - frameSize))}
          >
            <img src="https://svgsilh.com/svg/25832.svg" width="50px"></img>
          </button>
        </section>

        <form className="Carousel__form">
          <fieldset className="Carousel__form-list">
            <legend>Control options</legend>
            <div className="Carousel__form-item">
              <label htmlFor="items-width">
                {`Choose ball size `}
              </label>
              <input
                type="range"
                name="itemWidth"
                id="items-width"
                min="65"
                max="260"
                value={itemWidth}
                onChange={this.handleChange}
              />
            </div>

            <div className="Carousel__form-item">
              <label htmlFor="frame-size">
                {`Choose count in frame `}
              </label>
              <input
                type="number"
                name="frameSize"
                id="frame-size"
                min="1"
                max={images.length}
                value={frameSize}
                onChange={this.handleChange}
              />
            </div>

            <div className="Carousel__form-item">
              <label htmlFor="step">
                {`Choose click step `}
              </label>
              <input
                type="number"
                name="step"
                id="step"
                min="1"
                max={images.length / 2}
                value={step}
                onChange={this.handleChange}
              />
            </div>

            <div className="Carousel__form-item">
              <label htmlFor="animation-duration">
                {`Duration of slide `}
              </label>
              <input
                type="range"
                name="animationDuration"
                id="animation-duration"
                value={animationDuration}
                min='0'
                max='2000'
                onChange={this.handleChange}
              />
            </div>

          </fieldset>
        </form>
        
      </div>
    )
  }
};

export default Carousel;
