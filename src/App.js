//using function
/* import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App; */

//using class
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(), //is used to generate a unique identifier for each to-do item.
        title: "Take out the trash",
        completed: false,
        desc:"after work",
      },

      {
        id: uuidv4(),
        title: "Dinner with husband",
        completed: false,
        desc:"after work",
      },

      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false,
        desc:"after work",
      },
    ],
  };
  //Toggle Complete

  markComplete = (id) => {
    //console.log(id)
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //to be abe to toggle
        }
        return todo;
        //it is toggling the state at from the top and that state is beeing brought down throught the props into the components
      }),
    });
  };

  //Delete Todo

  delTodo = (id) => {
    //console.log(id)
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo

  addTodo = (title, desc) => {
    //console.log(title)
    const newTodo = {
      id: uuidv4(),
      title,
      desc,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    //console.log(this.state.todos)
    //takes the todos in our state and passes to our Todos component as a prop
    //Header component is rendered outside of the Routes component so it  will be displayed on all pages.
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route
                path="/"
                element={(
                  <React.Fragment>
                    <AddTodo AddTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </React.Fragment>
                )}
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;




//React Router v5:


//import { BrowserRouter as Router, Route } from 'react-router-dom';

/* return (
  <Router>
    <div className="App">
      <div className="container">
        <Header />
        
          <Route
            path="/"
           render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>          
              
            )}
          />
          
      </div>
    </div>
  </Router> 
   );
  }
}*/
