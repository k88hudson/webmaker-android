var React = require('react');
var classNames = require('classnames');
var assign = require('react/lib/Object.assign');
var Link = require('../link/link.jsx');

var Menu = React.createClass({
  render: function () {
    return (<div className="action-menu">
      {this.props.children}
    </div>);
  }
});

function makeButtonType(type) {
  return React.createClass({
    render: function () {
      var className = classNames(type, this.props.side, this.props.className, {
        off: this.props.off
      });
      var Tag = this.props.url ? Link : 'button';
      var props = assign({}, this.props, {className});
      return (<Tag {...props}>
        <img className="icon" src={this.props.icon} />
      </Tag>);
    }
  });
}

module.exports = {
  Menu,
  PrimaryButton: makeButtonType('primary-btn'),
  SecondaryButton: makeButtonType('secondary-btn')
};
