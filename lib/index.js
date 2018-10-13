'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */

exports.default = (0, _createReactClass2.default)({
  componentDidMount: function componentDidMount() {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      {
        className: this.props.className,
        ref: function ref(el) {
          _this.carouselContainer = el;
        } },
      this.props.children
    );
  }
});