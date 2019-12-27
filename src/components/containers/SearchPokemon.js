import React, { Component } from 'react';

export default class SearchPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null
    };

    this.formRef = React.createRef(); // Reference to the form
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => { // Automatically submit the form
      this.formRef.current.dispatchEvent(new Event('submit'));
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreashing the page

    this.props.searchPokemon(this.state.name);
  };

  render() {
    return (
      <div>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input type="text" id="name" placeholder="Name" autoComplete="off" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
