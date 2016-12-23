'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/*
 * This component renders list in the form of slider menu. Need to pass 'menuItems' with the list of options.
 * */
var SliderMenu = function (_React$Component) {
    _inherits(SliderMenu, _React$Component);

    function SliderMenu(props) {
        _classCallCheck(this, SliderMenu);

        var _this = _possibleConstructorReturn(this, (SliderMenu.__proto__ || Object.getPrototypeOf(SliderMenu)).call(this, props));

        _this.closeNav = _this.closeNav.bind(_this);
        _this.openNav = _this.openNav.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = {
            showMenu: false,
            activeLink: ''
        };
        return _this;
    }

    _createClass(SliderMenu, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                var _ret = function () {
                    var _props$menuStyle = _this2.props.menuStyle,
                        width = _props$menuStyle.width,
                        backgroundColor = _props$menuStyle.backgroundColor,
                        fontColor = _props$menuStyle.fontColor,
                        sliderIconColor = _props$menuStyle.sliderIconColor,
                        selectedItemBgColor = _props$menuStyle.selectedItemBgColor;


                    var menuItems = _this2.props.menuItems ? _this2.props.menuItems : [];
                    var activeStyle = '';
                    var activeLink = _this2.state.activeLink || _this2.props.defaultSelectedMenuValue;
                    var menus = menuItems.map(function (menu, index) {
                        activeStyle = activeLink === menu[_this2.props.menuValueKey] ? {backgroundColor: selectedItemBgColor} : {};
                        return _react2.default.createElement(
                            'span',
                            {
                                style: activeStyle, key: index, onClick: function onClick(e) {
                                return _this2.handleClick(menu);
                            }
                            },
                            menu[_this2.props.menuLabelKey]
                        );
                    });

                    if (!_this2.state.showMenu) {
                        width = '0px';
                    }

                    return {
                        v: _react2.default.createElement(
                            'div',
                            {id: 'sideNavContainer', style: {color: fontColor}},
                            _react2.default.createElement(
                                'div',
                                {
                                    id: 'sideNav',
                                    className: 'sidenav',
                                    style: {width: width, backgroundColor: backgroundColor}
                                },
                                _react2.default.createElement(
                                    'span',
                                    {className: 'closebtn', onClick: _this2.closeNav},
                                    '\xD7'
                                ),
                                menus
                            ),
                            _react2.default.createElement(
                                'span',
                                {className: 'open-lines', onClick: _this2.openNav, style: {color: sliderIconColor}},
                                '\u2630'
                            )
                        )
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            } catch (e) {
                console.error('error occurred while rendering the form menu: ' + e);
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(menu) {
            this.setState({activeLink: menu[this.props.menuValueKey]});
            this.props.onClick(menu);
        }
    }, {
        key: 'openNav',
        value: function openNav() {
            this.setState({showMenu: true});
        }
    }, {
        key: 'closeNav',
        value: function closeNav() {
            this.setState({showMenu: false});
        }
    }]);

    return SliderMenu;
}(_react2.default.Component);

exports.default = SliderMenu;