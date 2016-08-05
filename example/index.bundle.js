webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(35);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _InfiniteScroll = __webpack_require__(175);\n\nvar _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/8/2.\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\nvar Item = function (_React$Component) {\n    _inherits(Item, _React$Component);\n\n    function Item() {\n        _classCallCheck(this, Item);\n\n        return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));\n    }\n\n    _createClass(Item, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate() {\n            console.log('update');\n            return false;\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            console.log('did mount');\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            console.log('did unmount');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'p',\n                null,\n                this.props.text\n            );\n        }\n    }]);\n\n    return Item;\n}(_react2.default.Component);\n\nvar App = function (_React$Component2) {\n    _inherits(App, _React$Component2);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));\n\n        var num = Math.floor(Math.random() * 100);\n        var arr = [];\n        for (var i = 0; i < num; i++) {\n            arr.push(Math.random());\n        }\n        console.log(num);\n        _this2.state = {\n            items: arr\n        };\n        return _this2;\n    }\n\n    _createClass(App, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate() {\n            console.log('updateA');\n            return true;\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            console.log('did mountA');\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            console.log('did unmountA');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                _InfiniteScroll2.default,\n                { onLoad: this.loadMore.bind(this), hasMore: true, height: '100%' },\n                function () {\n                    return _this3.state.items.map(function (item) {\n                        return _react2.default.createElement(Item, { text: item });\n                    });\n                }()\n            );\n        }\n    }, {\n        key: 'loadMore',\n        value: function loadMore() {\n            var num = 10;\n            var arr = [];\n            for (var i = 0; i < num; i++) {\n                arr.push(Math.random());\n            }\n            this.setState({\n                items: this.state.items.concat(arr)\n            });\n            return Promise(resolve, reject);\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#wrapper'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./example/index.jsx\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./example/index.jsx?");

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InlineLoading = __webpack_require__(176);\n\nvar _InlineLoading2 = _interopRequireDefault(_InlineLoading);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n} /**\r\n   * Created by Soup Tang on 2016/8/2.\r\n   */\n\nvar InfiniteScroll = function (_React$Component) {\n    _inherits(InfiniteScroll, _React$Component);\n\n    function InfiniteScroll(props) {\n        _classCallCheck(this, InfiniteScroll);\n\n        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteScroll).call(this, props));\n\n        _this.state = {\n            loadCompleted: false,\n            startLoad: false //首次加载时不显示inline loading\n        };\n        return _this;\n    }\n\n    _createClass(InfiniteScroll, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            this.refs.list.addEventListener('scroll', function (e) {\n                var clientHeight = e.target.clientHeight;\n                var scrollHeight = e.target.scrollHeight;\n                var scrollTop = e.target.scrollTop;\n                if (scrollHeight - clientHeight == scrollTop && _this2.props.hasMore === true) {\n                    if (!_this2.props.onLoad) {\n                        throw new Error('need onLoad');\n                    }\n                    //onLoad返回Promise对象\n                    _this2.setState({\n                        loadCompleted: false,\n                        startLoad: true\n                    });\n                    _this2.props.onLoad().then(function () {\n                        _this2.setState({\n                            loadCompleted: true\n                        });\n                    }).catch(function (errorMsg) {\n                        _this2.setState({\n                            loadCompleted: true\n                        });\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'style',\n        value: function style() {\n            return {\n                height: this.props.height\n            };\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\"ul\", { ref: \"list\", className: this.props.className + ' infinite-scroll', style: this.style() }, this.props.children, function () {\n                if (_this3.state.startLoad === false) {\n                    return null;\n                }\n                if (_this3.props.hasMore === true && _this3.state.loadCompleted === false) {\n                    return _react2.default.createElement(_InlineLoading2.default, { hasMore: true });\n                }\n                return _react2.default.createElement(_InlineLoading2.default, { hasMore: false, text: \"没有更多了...\" });\n            }());\n        }\n    }]);\n\n    return InfiniteScroll;\n}(_react2.default.Component);\n\nInfiniteScroll.defaultProps = {\n    hasMore: true,\n    height: 'auto'\n};\n\nInfiniteScroll.propType = {\n    hasMore: _react2.default.PropTypes.bool,\n    //显示设置高度以便产生滚动事件\n    height: _react2.default.PropTypes.string,\n    className: _react2.default.PropTypes.string,\n    //加载更多\n    onLoad: _react2.default.PropTypes.func\n};\n\nmodule.exports = InfiniteScroll;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./dist/InfiniteScroll.js\n ** module id = 175\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./dist/InfiniteScroll.js?");

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n} /**\r\n   * Created by Soup Tang on 2016/8/2.\r\n   */\n\nvar InlineLoading = function (_React$Component) {\n    _inherits(InlineLoading, _React$Component);\n\n    function InlineLoading() {\n        _classCallCheck(this, InlineLoading);\n\n        return _possibleConstructorReturn(this, Object.getPrototypeOf(InlineLoading).apply(this, arguments));\n    }\n\n    _createClass(InlineLoading, [{\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\"div\", { className: \"inline-loading\" }, function () {\n                if (_this2.props.hasMore === true) {\n                    return _react2.default.createElement(\"div\", { className: \"kebab-spinner-fading-circle circle-color\" }, _react2.default.createElement(\"div\", { className: \"is-circle1 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle2 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle3 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle4 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle5 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle6 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle7 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle8 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle9 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle10 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle11 circle\" }), _react2.default.createElement(\"div\", { className: \"is-circle12 circle\" }));\n                }\n            }(), _react2.default.createElement(\"span\", { className: \"text\" }, this.props.text));\n        }\n    }]);\n\n    return InlineLoading;\n}(_react2.default.Component);\n\nInlineLoading.defaultProps = {\n    hasMore: true,\n    text: '加载中...'\n};\n\nInlineLoading.propType = {\n    hasMore: _react2.default.PropTypes.bool,\n    text: _react2.default.PropTypes.string\n};\n\nmodule.exports = InlineLoading;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./dist/InlineLoading.js\n ** module id = 176\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./dist/InlineLoading.js?");

/***/ }

});