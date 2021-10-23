import axios from 'axios';
import React ,{Component} from 'react';
import '.Greetings.css'
class Greetings extends Component{
constructor(props){
super(props)
this.state={
    todos:[],
    Posts:[]
}
this.getTodos=this.getTodos.bind(this)
this.getPosts=this.getPosts.bind(this)

}
getTodos(){
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=>{
        console.log("Axios Response ",  res.data);
        this.setState({todos:res.data})
    });
}
getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        return res.json();
    })
    .then(digestedResponse=>{
        console.log('Digested Response:',digestedResponse)
        this.setState({Posts: digestedResponse})
    })
}

render()
{
    console.log("this.state ",this.state);
const todos=this.state.todos.map(res=>{
    return(
        (<tr>
            <td>{res.userId}</td>
              <td>{res.id}</td>
                <td>{res.title}</td>
                    <td>{res.completed}</td>
        </tr>)
    )
        });

        return(
        <div id='container'>
            <div id="header">
                <button onClick={this.getTodos}> Get Todos</button>
                <button onClick={this.getPosts}>Get Posts</button>
                </div>
                <div id="todos">
                    <table>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos}
                        </tbody>
                    </table>

                </div>
                <div id="posts">
                <table>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts}
                        </tbody>
                    </table>

                </div>
                </div>
    )
}
  };


export default Greetings;

