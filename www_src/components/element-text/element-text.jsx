var React = require('react');
var assign = require('react/lib/Object.assign');
var classNames = require('classnames');

var Text = React.createClass({
  propTypes: {
    attributes: React.PropTypes.shape({
      innerHTML: React.PropTypes.string
    }),
    styles: React.PropTypes.shape({
      top: React.PropTypes.number,
      left: React.PropTypes.number,
      zIndex: React.PropTypes.number,
      textSize: React.PropTypes.number,
      fontFamily: React.PropTypes.string,
      color: React.PropTypes.string,
      textWeight: React.PropTypes.onOf(['bold', 'normal']),
      fontStyle: React.PropTypes.onOf(['italic', 'normal']),
      textDecoration: React.PropTypes.onOf(['underline', 'none']),
      textAlign: React.PropTypes.onOf(['center', 'left', 'right'])
    }),
  },
  getStyles: function (styles) {
    var result = {}
    Object.keys(styles).forEach(prop => {
      var val = styles[prop];
      if (['top', 'left'].indexOf(prop) >= 0) {
        val += '%';
      }
      result[prop] = val;
    });
    return result;
  },
  render: function () {
    return <p styles={this.getStyles(this.props.styles)}>{this.props.innerHTML}</p>;
  }
});

module.exports = Text;
