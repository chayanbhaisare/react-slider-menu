# React Slider Menu

A [React](http://facebook.github.io/react/) component for rendering a customizable sliding menu bar.

![initial](https://cloud.githubusercontent.com/assets/9765739/21464053/6e9ccf02-c930-11e6-8883-fe8a179616a3.PNG)
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
  <SliderMenu  menuItems={this.menuItems}
               menuLabelKey='name'
               menuValueKey='id'
               defaultSelectedMenuValue='3'
               onClick={this.handleClick}
               menuStyle={ {width: "200px", backgroundColor: "rgb(0, 206, 209)", fontColor: "black", sliderIconColor: "black",
                                              selectedItemBgColor: 'white'} }
                      />
  , document.getElementById('app')
);
```

## Props

### `menuItems` : `array`

List of objects representing the items in the menu bar.
e.g. this.menuItems = [
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

### `menuLabelKey`: `string`
It should match with one of the keys present in the array of objects passed to menuItems.
It is the key for the text that gets displaced in the menu bar.

### `menuValueKey` : `string`
It should match with one of the keys present in the array of objects passed to menuItems.
It is the key for the value that will be used to highlight the default selected item.

### `defaultSelectedMenuValue` : `string`
The option value which needs to be selected by default.

### `menuStyle` : `object`
An object which holds the JSX styles that needs to be customized.

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
