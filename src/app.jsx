import React from 'react';
import Axios from 'axios';
import ToDoList from './todoList'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            input: '',
            todos: [],
            users: [],
        };
        this.addTodo = this.addTodo.bind(this)
    }
    handleTodo(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleUser(e){
        this.setState({
            user: e.target.value
        })
    }
    componentDidMount() {
        Axios.get('/api')
        .then((response) => {
            let todoArr = [];
            let userArr = [];
            response.data.forEach((todo) => {
                console.log(todo.user)
                todoArr.push(todo.title)
            })
            this.setState({
                todos: todoArr,
                users: userArr
            })
        })
    }
    addTodo(e) {
        e.preventDefault();
        Axios.post('/todos', {
            title: this.state.input,
            user: this.state.user
        }).then((response) => {
        })
    }
    render(){
        return (
            <div>
                <h2>Add some todos</h2>
                <form action="submit">
                UserName: <br/>
                <input type="text" onChange={this.handleUser.bind(this)}/> <br/>
                Todo: <br/>
                <input onChange={this.handleTodo.bind(this)} type="text"/> <br/>
                <input type="submit" onClick={this.addTodo}/>
                </form>
                <ToDoList todos={this.state.todos} users={this.state.users} current={this.state.input}/>
            </div>
        )
    }
}

export default App;