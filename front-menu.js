var React = require('react');

var frontMenu = React.createClass({

  render: function() {
    return (
      <div>
        <ul>
          <li><a href="/minimal/"><h2>MINIMAL</h2></a></li>
          <li><a href="/wipeout/"><h2>WIPEOUT</h2></a></li>
          <li><a href="/myst/"><h2>MYST</h2></a></li>
        </ul>
      </div>
    );
  }

});

module.exports = frontMenu;
