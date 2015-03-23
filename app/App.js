var React = require('react');
var Todos = require('./Todos');

var App = React.createClass({
  getInitialState: function() {
    return {
      todos: ['First Todo', 'Second Todo', 'Third Todo']
    };
  },

  removeTodo: function (index) {
    var newTodos = this.state.todos.slice(0);
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  },

  render: function() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          removeTodo={this.removeTodo} />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'));
