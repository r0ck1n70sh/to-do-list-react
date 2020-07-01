import React from 'react'
import DisplayTask from './displayTask.js'
import TextInput from './textInput.js'

class DisplayList extends React.Component {
    constructor() {
        super();
        
        this.editTask= this.editTask.bind(this);
        this.deleteTask= this.deleteTask.bind(this);

        this.inputTask= this.inputTask.bind(this);
        this.editFinished= this.editFinished.bind(this);

        this.doneTask= this.doneTask.bind(this);
    }

    editTask(event) {
        this.props.editTask(event);
    }

    deleteTask(event) {
        this.props.deleteTask(event);
    }

    inputTask(event) {
        this.props.inputTask(event);
    }

    editFinished(event) {
        this.props.editFinished(event);
    }

    doneTask(event) {
        this.props.doneTask(event);
    }

    render() {
        let list= this.props.taskList; 
        const inputText= this.props.inputText;

        list= list.map(
            (item) => {
                if(item.edit === false) {
                    return <DisplayTask 
                                key= {item.text}
                                id= {item.text}
                                text={item.text}
                                editBtnClicked= {this.editTask}
                                deleteBtnClicked= {this.deleteTask}

                                done={item.done}
                                doneBtnClicked= {this.doneTask}
                            />;
                }   else {
                        return <TextInput
                                    key={item.text}
                                    id= {item.text}
                                    btnValue= "done"
                                    onInputChange= {this.inputTask}
                                    onBtnClicked= {this.editFinished}
                                    inputText= {inputText}                                
                                />;
                }
            }
        )

        return(
            <ul>{list}</ul>
        );
    }
}

export default DisplayList;
