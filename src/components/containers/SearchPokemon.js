import React, { Component } from 'react';

const TIMER_INTERVAL = 1000;

export default class SearchPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null
    };

    this.formRef = React.createRef(); // Reference to the form
  }

  componentDidMount() {
    this.timer = null;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => { // Start the timer to automatically submit the form
      if (this.timer !== null) clearTimeout(this.timer); // Clears the timer if set

      this.timer = setTimeout(() => {
        this.formRef.current.dispatchEvent(new Event('submit'));
      }, TIMER_INTERVAL);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreashing the page

    if (this.timer !== null) clearTimeout(this.timer); // Clears the timer if set

    this.timer = null;
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
