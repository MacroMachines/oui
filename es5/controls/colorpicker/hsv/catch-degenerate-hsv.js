'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/*
    This HOC wraps the HSV ColorPicker in a stateful way to prevent loss of
    information in degenerate color conversions.

    Mapping { h, s, v } => { r, g, b } and back again, will lose information if
    { s, v } === 0

*/

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let isDegenerate = ({ h, s, v }) => s === 0;

exports.default = Comp => class RGB2HSV extends _preactCompat2.default.Component {

    constructor() {
        super();

        this.state = { value: null };

        this.conditionalChange = value => {
            if (isDegenerate(value)) {
                this.setState({ value });
            } else {
                this.setState({ value: null });
                this.props.onChange(value);
            }
        };
    }

    render() {

        return _preactCompat2.default.createElement(Comp, _extends({}, this.props, {
            value: this.state.value || this.props.value,
            onChange: change => this.conditionalChange(change) }));
    }
};