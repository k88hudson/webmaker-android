var React = require('react');
var Image = React.createClass({
  propTypes: {
    attributes: React.PropTypes.shape({
      src: React.PropTypes.string
    }),
    styles: React.PropTypes.shape({
      top: React.PropTypes.number,
      left: React.PropTypes.number,
      zIndex: React.PropTypes.number,
      opacity: React.PropTypes.number,
      borderRadius: React.PropTypes.number,
      borderColor: React.PropTypes.string,
      borderWidth: borderColor: React.PropTypes.number
    })
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
    return <img src={this.props.attributes.src} styles={getStyles(this.props.styles)}/>;
  }
});

module.exports = Image;
