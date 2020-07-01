import React from 'react';
import './App.css';
import ToDoApp from './toDoApp/toDoApp.js';

class App extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <ToDoApp />
            </div>
        )
    }
}

export default App;
