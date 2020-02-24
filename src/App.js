import React, {Component} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo";
const uuid = require("uuid")

class App extends Component{
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Take out the trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Dinner with friends ',
                completed: true
            },
            {
                id: uuid.v4(),
                title: 'Meeting with boss',
                completed: false
            }
        ]
    };

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => {
                return todo.id !== id;
            })]
        })
    };

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        };

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
    render() {
        // console.log(this.state.todos);
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
                </div>
            </div>
        );
    }
}

export default App;
