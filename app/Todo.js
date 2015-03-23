var React = require('react');

var Todo = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    removeTodo: React.PropTypes.func.isRequired
  },

  deleteTodo: function (e) {
    e.preventDefault();
    this.props.removeTodo(this.props.index);
  },

  render: function() {
    return (
      <li>
        <button onClick={this.deleteTodo}>X</button>{' '}
        <span>{ this.props.text }</span>
      </li>
    );
  }
});

module.exports = Todo;
