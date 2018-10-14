'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactCarousel(props) {
  var _this = this;
  _this.props = props;

  _this.componentDidMount = function () {
    window.jscarousel(_this.carouselContainer, {
      noClone: true,
      animationSpeed: _this.props.animationSpeed,
      itemDuration: _this.props.itemDuration,
      swipeThreshold: _this.props.swipeThreshold
    });
  };

  // eslint-disable-next-line
  _this.render = function () {
    return _react2.default.createElement(
      'div',
      {
        className: _this.props.className,
        ref: function ref(el) {
          _this.carouselContainer = el;
        } },
      _react2.default.createElement(
        'div',
        null,
        _this.props.children[_this.props.children.length - 1]
      ),
      _this.props.children.map(function (child, i) {
        return _react2.default.createElement(
          'div',
          { key: i },
          child
        );
      }),
      _react2.default.createElement(
        'div',
        null,
        _this.props.children[0]
      )
    );
  };
} /** @format */

ReactCarousel.prototype = _react2.default.Component.prototype;
ReactCarousel.prototype.constructor = ReactCarousel;

exports.default = ReactCarousel;