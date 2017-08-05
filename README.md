# React Slider Menu

A [React](http://facebook.github.io/react/) component for rendering a customizable sliding menu bar.

![after-open](https://cloud.githubusercontent.com/assets/9765739/21464010/cfb120fa-c92f-11e6-9412-a0f20d9d581a.PNG)

## Install

### npm

`React sliding menu bar` can be bundled with the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```
npm install react-slider-menu --save
```

## Usage

** For es6 import/export modules. **
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import SliderMenu from 'react-slider-menu';
```

```javascript
ReactDOM.render(
  <SliderMenu  items={this.items}
               labelKey='name'
               valueKey='id'
               defaultSelectedValue='3'
               onClick={this.handleClick}
               autoClose={false}
               style={ {width: "200px", backgroundColor: "rgb(0, 206, 209)", fontColor: "black", sliderIconColor: "black",
                                              selectedItemBgColor: 'white'} }
             />
  , document.getElementById('app')
);
```

## Props

### `items` : `array`

List of objects representing the items in the menu bar.
e.g. this.items = [
                 {
                     "name": "React JS",
                     "id": "1"
                 },
                 {
                     "name": "Angular JS",
                     "id": "2"
                 },
                 {
                     "name": "Backbone JS",
                     "id": "3"
                 },
                 {
                     "name": "HTML 5",
                     "id": "4"
                 },{
                     "name": "CSS 3",
                     "id": "5"
                 }
             ];

### `labelKey`: `string`
It should match with one of the keys present in the array of objects passed to items.
It is the key for the text that gets displaced in the menu bar.

### `valueKey` : `string`
It should match with one of the keys present in the array of objects passed to items.
It is the key for the value that will be used to highlight the default selected item.

### `defaultSelectedValue` : `string`
The option value which needs to be selected by default.

### `style` : `object`
An object which holds the JSX styles that needs to be customized.

### `autoClose` : `boolean`
Enable auto close of the menu on click of any menu item or clicking outside

### `onClick` : `function`
A callback function which is invoked when a item is selected from menu.
It receives an object of the selected item.
e.g.
```javascript
    handleClick(selectedItem) {
        console.log(`menu: ${JSON.stringify(selectedItem)}`);
    }
```
## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).
