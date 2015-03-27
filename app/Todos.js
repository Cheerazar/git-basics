var React = require('react');
var Todo = require('./Todo');

var Todos = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
    removeTodo: React.PropTypes.func.isRequired
  },

  render: function () {
    var todos = this.props.todos.map(function (todoText, index) {
      return <Todo
              key={index}
              text={todoText}
              index={index}
              removeTodo={this.props.removeTodo} />;
    }.bind(this));

    return (
      <ul style={{ 'listStyleType': 'none' }}>
        { todos }
      </ul>
    );
  }
});

module.exports = Todos;
