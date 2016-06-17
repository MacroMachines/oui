'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 	Another stupidly simple component, it effectively wraps the native checkbox.
	Documentation included for completeness
 */
class Checkbox extends _preactCompat2.default.Component {

	render() {

		const { value, label, onChange } = this.props;

		return _preactCompat2.default.createElement(
			'div',
			{ style: _extends({}, _styles.base, defaultStyle, { alignItems: 'center' }), onClick: evt => onChange(!value) },
			_preactCompat2.default.createElement(
				'label',
				{ style: _styles.base },
				label
			),
			_preactCompat2.default.createElement('input', { checked: value, style: alignRight, type: 'checkbox', onChange: evt => onChange(evt.target.checked) })
		);
	}
}

// Checkbox = radium( Checkbox )

Checkbox.propTypes = {

	/**
  * A text label
  */
	label: _preactCompat2.default.PropTypes.string,

	/**
  * Determines whether the element is checked or not.
  */
	value: _preactCompat2.default.PropTypes.bool,

	/**
  * A callback triggered when the checkbox is toggled
  */
	onChange: _preactCompat2.default.PropTypes.func

};

Checkbox.defaultProps = {
	label: 'Checkbox',
	value: false,
	onChange: a => a
};

var defaultStyle = {
	display: 'flex'
};

var alignRight = {
	marginLeft: 'auto'
};

exports.default = Checkbox;