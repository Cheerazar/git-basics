var React = require('react');
var Todos = require('./Todos');
var TodoForm = require('./TodoForm');

var App = React.createClass({
  getInitialState: function() {
    return {
      todos: ['First Todo', 'Second Todo', 'Third Todo']
    };
  },

  addTodo: function (text) {
    this.setState({
      todos: this.state.todos.concat([text])
    });
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
        <TodoForm addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          removeTodo={this.removeTodo} />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'));
