var React = require('react');
var render = require('../../lib/render.jsx');

window.Test = function () {
  console.log('Test');
};

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div className="tile"><img src="../../img/demo.png" /></div>
      </div>
    );
  }
});

// Render!
render(Main);
