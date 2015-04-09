var React = require('react');
var render = require('../../lib/render.jsx');

window.LogFromAndroid = function (text) {
  console.log(text);
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
