import React, { Component } from "react";
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state ={
        title: '',
        desc: ''
    }
 

 onSubmit = (e) => {
    e.preventDefault();//in order to not submit to the actual file
    this.props.AddTodo (this.state.title, this.state.desc);
    this.setState({title:'', desc: ''});
 }
 onChange = (e) => this.setState({title:e.target.value});
 onDescChange = (e) => this.setState({desc:e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} style ={{display:"flex"}}>
        <input 
        type="text" 
        name="title" 
        style={{flex:"5" , padding: "5px" , fontWeight: "bolder"}} 
        placeholder="Add Todo..." 
        value={this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="text" 
        name="description" 
        style={{flex:"10" , padding: "5px"}} 
        placeholder="Add description" 
        value={this.state.desc}
        onChange={this.onDescChange}
        />
        <input
        type="submit" 
        value="Submit" 
        className="btn" 
        style={{flex:"1"}}
        />
      </form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
