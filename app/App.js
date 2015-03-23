var React = require('react');
var Todos = require('./Todos');

var App = React.createClass({
  getInitialState: function() {
    return {
      todos: ['First Todo', 'Second Todo', 'Third Todo']
    };
  },

  render: function() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'));
