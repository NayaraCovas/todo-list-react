import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
 

  render() {
    const {id, title} =this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox"  onChange={this.props.markComplete.bind
            (this, id)}/> {' '}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border: 'none',
    padding: '5px 8px' ,
    borderRadius: '50%' ,
    cursor: 'pointer' ,
    float: 'right'


}








/* //Options for styling:

First option:
<div style={{backgroundColor:'#f4f4f4' }}

Second option:
 <div style={itemStyle}


const itemStyle = {
    backgroundColor:'#f4f4f4'  

 Third option: inside a function
 It can be used if I want the color to change depending on the if the todo is completed or not

 <div style={this.getStyle()}

 getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: "line-through"
            }
        } else{
            return {
                textDecoration: "none"  
            }
        }
    }
} */


export default TodoItem
