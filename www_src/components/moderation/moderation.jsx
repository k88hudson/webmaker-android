var React = require('react');
var Moderation = React.createClass({
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    this.setState(this.props.params);
  },
  componentDidUpdate: function (prevProps) {
    if (this.props.params !== prevProps.params) {
      this.setState(this.props.params);
    }
  },
  onChange: function (name, value) {
    var params = this.state;
    params[name] = value;
    this.setState(params);
  },
  onSubmit: function () {
    this.props.onSubmit(this.state);
  },
  render: function () {
    return (<div className="moderation">
      <h3>Moderation</h3>
      <table className="moderation-fields">
        {Object.keys(this.state).map(param => {
          return (<tr>
            <td><label>{param}:</label></td>
            <td><input value={this.state[param]} name={param} onChange={(e) => this.onChange(param, e.target.value)} /></td>
          </tr>);
        })}
      </table>
      <button onClick={this.onSubmit}>CHANGE</button>
    </div>);
  }
});

module.exports = Moderation;
