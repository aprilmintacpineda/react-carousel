/** @format */

import React from 'react';

export default class Carousel extends React.Component {
  componentDidMount () {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration
    });
  }

  render () {
    return (
      <div
        className={this.props.className}
        ref={el => {
          this.carouselContainer = el;
        }}>
        {this.props.children}
      </div>
    );
  }
}
