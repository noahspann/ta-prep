import React from 'react';
import Axios from 'axios';
import ToDoList from './todoList'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
            todos: []
        };
        this.addTodo = this.addTodo.bind(this)
    }
    onChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    componentDidMount() {
        Axios.get('/api')
        .then((response) => {
            let todoArr = [];
            response.data.forEach((todo) => {
                todoArr.push(todo.title)
            })
            this.setState({
                todos: todoArr
            })
        })
    }
    addTodo(e) {
        e.preventDefault();
        Axios.post('/todos', {
            title: this.state.input
        });
    }
    render(){
        return (
            <div>
                <h2>Add some todos</h2>
                <form action="submit">
                Todo: <br/>
                <input onChange={this.onChange.bind(this)} type="text"/>
                <input type="submit" onClick={this.addTodo}/>
                </form>
                <ToDoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default App;