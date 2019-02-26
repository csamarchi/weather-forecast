import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      zipcode: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getWeatherWithSearch(this.state.zipcode);
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='zipcode' placeholder='enter zipcode...' onChange={this.handleChange} />
          <input type='submit' name='submit' />
        </form>
      </div>
    )
  }
}

export default Form;
