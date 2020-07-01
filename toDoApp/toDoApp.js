import React from 'react';
import TextInput from './textInput.js';
import DisplayList from './displayList.js';

class Task {
    constructor(text) {
        this.text= text;
        this.done= false;
        this.edit= false;
    }
}

class ToDoApp extends React.Component {
    constructor(){
        super();
    
        this.state = {
            newInput: "",
            taskList: [],
        }

        this.handleNewInput= this.handleNewInput.bind(this);
        this.handleNewTask= this.handleNewTask.bind(this);

        this.handleEditTask= this.handleEditTask.bind(this);
        this.handleDeleteTask= this.handleDeleteTask.bind(this);
        this.handleOldTask= this.handleOldTask.bind(this);

        this.handleDoneTask= this.handleDoneTask.bind(this);
    }
        
    handleNewInput(event) {
        this.setState({
            newInput: event.target.value
            }
        );
    }

    handleNewTask(event) {
        this.setState(
            (state) => {
                const task = new Task(state.newInput);
                const taskList= state.taskList.concat(task);

                return {
                    taskList,
                    newInput: "",
                };
            }
        );
    }

    handleEditTask(event) {
        event.persist();

        this.setState(
            (state) => {
                let taskList= state.taskList;
                const match= event.target.id.replace('editBtn', '');
                
                taskList.forEach(
                    (item) => {
                        if(item.text === match)
                            item.edit= true;
                    }
                );
 
                return {
                    taskList,
                }
            }
        );
    }

    handleDeleteTask(event) {
        event.persist();

        this.setState(
            (state) => {
                let tempList= state.taskList;
                const match= event.target.id.replace('deleteBtn', '');
        
                const taskList= tempList.filter(
                    (item) => item.text !== match
                );

                return {
                    taskList,
                }
            }
        );
    }

    handleOldTask(event) {
        event.persist();

        this.setState(
            (state) => {
                const taskText= state.newInput;
                let taskList= state.taskList;
                const match= event.target.id.replace('editBtn', '');

                taskList.forEach(
                    (item) => {
                        if(item.text === match) {
                            item.edit= false;
                            item.text= taskText;
                        }

                    }
                );

                return {
                    taskList,
                    newInput: "" 
                }

            }
        );

    }

    handleDoneTask(event) {
        event.persist();

        this.setState(
            (state) => {
                let taskList= state.taskList;
                const match= event.target.id.replace('doneBtn', '');

                taskList.forEach(
                    (item) => {
                        const value= item.done

                        if(item.text === match) 
                            item.done= true;
                    }
                );
           
                return {
                    taskList,
                } 
            }
        );
    }
 
    render(){
        const inputText= this.state.newInput;
        const taskList= this.state.taskList;

        return(
            <div>
                <p>To-Do List</p>
                <TextInput
                    btnValue="+"
                    onInputChange= {this.handleNewInput}
                    onBtnClicked= {this.handleNewTask}
                    inputText= {inputText}
                />

                <DisplayList
                    taskList= {taskList}
                    editTask= {this.handleEditTask}
                    deleteTask= {this.handleDeleteTask}

                    inputTask= {this.handleNewInput}
                    editFinished= {this.handleOldTask}
                    inputText= {inputText}

                    doneTask= {this.handleDoneTask}
                />
            </div>
        );
    }
}

export default ToDoApp;
