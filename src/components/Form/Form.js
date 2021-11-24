import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isChecked: false,
      isShown: false
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleCheck(e){
    // console.log(e);
    this.setState({
      isChecked: e.target.checked
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(e);
    this.setState({
      isShown: !this.state.isShown
    })
  }

  render(){

    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input value={this.state.value} onChange={this.handleChange} type="text"/>
          <input value={this.state.isChecked} type="checkbox" onChange={this.handleCheck}/>
          <button>Submit </button>
        </form>
        {
          this.state.isShown
          ?  JSON.stringify(this.state)
          : <p>NotSubmit</p>
        }
      </div>
    )
  }
}

export default Form;