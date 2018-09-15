<!-- @format -->

# react-js-carousel

Carousel component for ReactJS.

See [Demo](https://aprilmintacpineda.github.io/react-js-carousel/).

## install

```sh
npm i -s react-js-carousel js-carousel
```

## Usage

On your main entry file:

```jsx
import 'js-carousel';
```

Then, whenever you want to use the component.

```jsx
import ReactCarousel from 'react-carousel';
```

Then:

```jsx
<ReactCarousel animationSpeed={500} itemDuration={5000}>
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
</ReactCarousel>
```

You can also specify a `className` for the container of the carousel by providing a `className` prop to it.

- `animationSpeed` is the speed (in terms of milliseconds) of the transition animation.
- `itemDuration` is the amount of time (in terms of milliseconds) it has to wait before transitioning to the next item.

`react-js-carousel` uses [js-carousel](https://github.com/aprilmintacpineda/js-carousel).
