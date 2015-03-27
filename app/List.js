var React = require('react');
var Todos = require('./Todos');
var TodoForm = require('./TodoForm');

var List = React.createClass({
  getInitialState: function() {
    return {
      todos: []
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

module.exports = List;
