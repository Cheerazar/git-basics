var React = require('react');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

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
        <Button
          bsStyle="danger"
          bsSize="small"
          onClick={this.deleteTodo}>Remove
        </Button>{' '}
        <span>{ this.props.text }</span>
      </li>
    );
  }
});

module.exports = Todo;
