var React = require('react');

var TodoForm = React.createClass({
  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      newTodo: ''
    };
  },

  handleChange: function (e) {
    this.setState({
      newTodo: e.target.value
    });
  },

  handleSubmit: function (e) {
    if (e.keyCode === 13 && this.state.newTodo !== '') {
      e.preventDefault();
      this.props.addTodo(this.state.newTodo);
      this.setState({
        newTodo: ''
      });
    }
  },

  render: function () {
    return (
      <form>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="New Todo"
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange} />
      </form>
    );
  }
});

module.exports = TodoForm;
