var React = require('react');
var List = require('./List');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <List />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'));
